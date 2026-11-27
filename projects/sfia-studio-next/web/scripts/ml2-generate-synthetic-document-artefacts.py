#!/usr/bin/env python3
"""Generate six REAL synthetic document artefacts for ML2 Vision/PDF benchmarks."""
from __future__ import annotations

import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT = Path(__file__).resolve().parents[1] / ".sfia-evidence/document-intelligence/artefacts"
OUT.mkdir(parents=True, exist_ok=True)


def sha256(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def write_pdf_with_text(path: Path, lines: list[str], page_size=(612, 792)) -> dict:
    """Minimal single-page PDF with a text content stream (extractable)."""
    width, height = page_size
    # Escape PDF string literals
    content_lines = ["BT", "/F1 12 Tf", "50 740 Td", "14 TL"]
    first = True
    for line in lines:
        safe = (
            line.replace("\\", "\\\\")
            .replace("(", "\\(")
            .replace(")", "\\)")
        )
        if first:
            content_lines.append(f"({safe}) Tj")
            first = False
        else:
            content_lines.append("T*")
            content_lines.append(f"({safe}) Tj")
    content_lines.append("ET")
    stream = "\n".join(content_lines).encode("latin-1", errors="replace")

    objects: list[bytes] = []
    objects.append(b"1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n")
    objects.append(b"2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj\n")
    objects.append(
        (
            f"3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {width} {height}] "
            f"/Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>endobj\n"
        ).encode()
    )
    objects.append(
        f"4 0 obj<< /Length {len(stream)} >>stream\n".encode()
        + stream
        + b"\nendstream\nendobj\n"
    )
    objects.append(
        b"5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj\n"
    )

    out = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for obj in objects:
        offsets.append(len(out))
        out.extend(obj)
    xref_pos = len(out)
    out.extend(f"xref\n0 {len(objects)+1}\n".encode())
    out.extend(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        out.extend(f"{off:010d} 00000 n \n".encode())
    out.extend(
        f"trailer<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode()
    )
    path.write_bytes(bytes(out))
    return {
        "path": str(path.relative_to(OUT.parent)),
        "bytes": len(out),
        "sha256": sha256(bytes(out)),
        "pages": 1,
        "hasTextLayer": True,
    }


def image_to_pdf(path: Path, img: Image.Image) -> dict:
    """Embed a single RGB image as a scanned-style PDF (no text operators)."""
    img = img.convert("RGB")
    w, h = img.size
    # JPEG bytes
    import io

    buf = io.BytesIO()
    img.save(buf, format="JPEG", quality=85)
    jpeg = buf.getvalue()

    objects: list[bytes] = []
    objects.append(b"1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n")
    objects.append(b"2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj\n")
    objects.append(
        (
            f"3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {w} {h}] "
            f"/Contents 4 0 R /Resources << /XObject << /Im0 5 0 R >> >> >>endobj\n"
        ).encode()
    )
    content = f"q {w} 0 0 {h} 0 0 cm /Im0 Do Q".encode()
    objects.append(
        f"4 0 obj<< /Length {len(content)} >>stream\n".encode()
        + content
        + b"\nendstream\nendobj\n"
    )
    objects.append(
        f"5 0 obj<< /Type /XObject /Subtype /Image /Width {w} /Height {h} "
        f"/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode "
        f"/Length {len(jpeg)} >>stream\n".encode()
        + jpeg
        + b"\nendstream\nendobj\n"
    )

    out = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for obj in objects:
        offsets.append(len(out))
        out.extend(obj)
    xref_pos = len(out)
    out.extend(f"xref\n0 {len(objects)+1}\n".encode())
    out.extend(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        out.extend(f"{off:010d} 00000 n \n".encode())
    out.extend(
        f"trailer<< /Size {len(objects)+1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode()
    )
    path.write_bytes(bytes(out))
    return {
        "path": str(path.relative_to(OUT.parent)),
        "bytes": len(out),
        "sha256": sha256(bytes(out)),
        "pages": 1,
        "hasTextLayer": False,
        "imageWidth": w,
        "imageHeight": h,
    }


def font(size: int = 18):
    try:
        return ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial.ttf", size)
    except Exception:
        return ImageFont.load_default()


def main() -> None:
    manifest = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "corpusId": "ml2-pdf-vision-artefacts-v1",
        "batiNova": False,
        "cases": [],
    }

    # P-TXT-01 textual
    meta = write_pdf_with_text(
        OUT / "P-TXT-01-orion-capacity.pdf",
        [
            "Synthetic room inventory — Project SYN-DOC",
            "Room Orion capacity equals 12 persons.",
            "Identifier: room.orion.capacity=12",
            "No authentication TTL content on this page.",
        ],
    )
    manifest["cases"].append(
        {
            "id": "P-TXT-01",
            "nature": "textual_pdf",
            "oracle": {
                "facts": ["Orion capacity 12", "room.orion.capacity=12"],
                "pages": [1],
                "extractLocalExpected": "SUCCESS",
                "visionRequired": False,
            },
            **meta,
        }
    )

    # P-SCN-01 scanned network schema (image only)
    img = Image.new("RGB", (900, 700), "white")
    d = ImageDraw.Draw(img)
    f = font(22)
    d.rectangle([80, 80, 280, 180], outline="black", width=3)
    d.text((110, 115), "Router R1", fill="black", font=f)
    d.rectangle([520, 80, 720, 180], outline="black", width=3)
    d.text((550, 115), "Switch S2", fill="black", font=f)
    d.line([280, 130, 520, 130], fill="black", width=3)
    d.text((320, 90), "connects to", fill="black", font=font(16))
    d.text((80, 520), "SCAN SYNTHETIC — no text layer", fill="gray", font=font(14))
    meta = image_to_pdf(OUT / "P-SCN-01-network-scan.pdf", img)
    # also keep raw PNG for vision input_image path
    png_path = OUT / "P-SCN-01-network-scan.png"
    img.save(png_path)
    manifest["cases"].append(
        {
            "id": "P-SCN-01",
            "nature": "scanned_pdf",
            "oracle": {
                "facts": ["router R1 connects to switch S2"],
                "pages": [1],
                "extractLocalExpected": "SCANNED_NO_TEXT",
                "visionRequired": True,
                "limits": ["probabilistic_not_exhaustive_ocr"],
            },
            "pngPath": str(png_path.relative_to(OUT.parent)),
            "pngSha256": sha256(png_path.read_bytes()),
            **meta,
        }
    )

    # P-DIA-01 architecture boxes
    img = Image.new("RGB", (1000, 500), "#f7f7f7")
    d = ImageDraw.Draw(img)
    boxes = [("D3", 80), ("D4", 360), ("D6", 640)]
    for label, x in boxes:
        d.rectangle([x, 160, x + 200, 280], outline="#222", width=3, fill="white")
        d.text((x + 70, 200), label, fill="#222", font=font(28))
    d.line([280, 220, 360, 220], fill="#222", width=3)
    d.text((290, 180), "read", fill="#222", font=font(16))
    d.line([560, 220, 640, 220], fill="#222", width=3)
    d.text((565, 180), "authority only", fill="#222", font=font(14))
    meta = image_to_pdf(OUT / "P-DIA-01-architecture.pdf", img)
    png_path = OUT / "P-DIA-01-architecture.png"
    img.save(png_path)
    manifest["cases"].append(
        {
            "id": "P-DIA-01",
            "nature": "architecture_diagram",
            "oracle": {
                "relations": ["D3->D4 read", "D6 authority only"],
                "extractLocalExpected": "SCANNED_NO_TEXT",
                "visionRequired": True,
            },
            "pngPath": str(png_path.relative_to(OUT.parent)),
            "pngSha256": sha256(png_path.read_bytes()),
            **meta,
        }
    )

    # P-BPMN-01
    img = Image.new("RGB", (1100, 420), "white")
    d = ImageDraw.Draw(img)
    steps = ["investigation", "note", "inspection"]
    xs = [80, 420, 760]
    for label, x in zip(steps, xs):
        d.ellipse([x, 140, x + 180, 280], outline="#111", width=3)
        d.text((x + 20, 190), label, fill="#111", font=font(18))
    d.line([260, 210, 420, 210], fill="#111", width=3)
    d.line([600, 210, 760, 210], fill="#111", width=3)
    d.text((280, 120), "precedes", fill="#111", font=font(14))
    d.text((620, 120), "after note", fill="#111", font=font(14))
    meta = image_to_pdf(OUT / "P-BPMN-01-flow.pdf", img)
    png_path = OUT / "P-BPMN-01-flow.png"
    img.save(png_path)
    manifest["cases"].append(
        {
            "id": "P-BPMN-01",
            "nature": "bpmn",
            "oracle": {
                "relations": ["investigation precedes note", "inspection after note"],
                "visionRequired": True,
            },
            "pngPath": str(png_path.relative_to(OUT.parent)),
            "pngSha256": sha256(png_path.read_bytes()),
            **meta,
        }
    )

    # P-TBL-01 complex table as textual PDF (cells readable by extract)
    meta = write_pdf_with_text(
        OUT / "P-TBL-01-tariff-table.pdf",
        [
            "Tariff table synthetic",
            "model | effort | admissionStatus",
            "gpt-6-luna | medium | documented_candidate",
            "gpt-6.1-terra | medium | operational",
            "gpt-6.2-sol | medium | operational",
        ],
    )
    manifest["cases"].append(
        {
            "id": "P-TBL-01",
            "nature": "complex_table",
            "oracle": {
                "cells": [
                    {
                        "row": "gpt-6-luna",
                        "col": "medium",
                        "value": "documented_candidate",
                    }
                ],
                "extractLocalExpected": "SUCCESS",
                "visionRequired": "optional",
            },
            **meta,
        }
    )

    # P-ILLEG-01 illegible zone
    img = Image.new("RGB", (900, 600), "white")
    d = ImageDraw.Draw(img)
    d.text((40, 40), "Readable header: SYN-ILLEG-01", fill="black", font=font(22))
    d.text((40, 90), "Clear fact: warehouse code WH-77", fill="black", font=font(18))
    # bottom-right stamp region then heavy blur
    stamp = Image.new("RGB", (280, 120), "white")
    sd = ImageDraw.Draw(stamp)
    sd.text((10, 40), "SECRET-STAMP-ZZ9", fill="black", font=font(20))
    stamp = stamp.filter(ImageFilter.GaussianBlur(radius=12))
    img.paste(stamp, (580, 430))
    d.rectangle([575, 425, 865, 555], outline="red", width=2)
    d.text((580, 560), "zone marked illegible", fill="red", font=font(14))
    meta = image_to_pdf(OUT / "P-ILLEG-01-partial.pdf", img)
    png_path = OUT / "P-ILLEG-01-partial.png"
    img.save(png_path)
    manifest["cases"].append(
        {
            "id": "P-ILLEG-01",
            "nature": "illegible_zones",
            "oracle": {
                "readableFacts": ["warehouse code WH-77"],
                "undeterminable": ["bottom-right stamp text"],
                "mustNotInvent": True,
                "coverageMustMarkUnread": True,
            },
            "pngPath": str(png_path.relative_to(OUT.parent)),
            "pngSha256": sha256(png_path.read_bytes()),
            **meta,
        }
    )

    man_path = OUT / "artefacts-manifest.json"
    man_path.write_text(json.dumps(manifest, indent=2) + "\n")
    print(json.dumps({"out": str(OUT), "cases": len(manifest["cases"]), "manifestSha": sha256(man_path.read_bytes())}, indent=2))


if __name__ == "__main__":
    main()
