# 04 — Provider & prompt

- Interface OPS1 `ConversationProvider` réutilisée
- `FakeIntakeConversationProvider` déterministe (défaut)
- Live optionnel : `D1_INTAKE_LIVE=1` + secrets OPS1 existants
- Prompt système D1-C2 local (`prompt.ts`) — JSON strict, anti-claims, no tools
