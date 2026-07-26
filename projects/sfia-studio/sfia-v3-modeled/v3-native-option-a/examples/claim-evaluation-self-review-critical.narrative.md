# ClaimEvaluation self-review Critical (forbidden)

Critical claims must not be confirmed by the same actor who proposed them.

Runtime invariant: `CLAIM_SELF_REVIEW_FORBIDDEN` when `criticality=critical` and `proposedBy.actorId == confirmedBy.actorId`.

System may propose Critical; only an authorized human (not system/agent) may confirm. Self-review of Critical is rejected.

This is a runtime/governance narrative — schema alone does not encode proposedBy≠confirmedBy.
