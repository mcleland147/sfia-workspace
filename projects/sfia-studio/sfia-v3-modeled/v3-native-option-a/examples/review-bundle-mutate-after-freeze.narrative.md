# ReviewBundle mutate after freeze

Once `frozenAt` is set (`ready_for_review` ≡ freeze), the bundle is immutable for evidence membership and claim evaluation binding.

Mutations must raise `REVIEW_BUNDLE_NOT_FROZEN` when freeze is required but missing, or refuse mutation on an already frozen bundle (immutable after freeze).

Verdicts (accepted/rejected) bind `reviewBundleId` + `version` exactly.
