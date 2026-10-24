# Security Specification & Threat Model

## 1. Data Invariants

1. **User Identity Boundary**: A user can only read, write, or query their own `/users/{userId}` profile and sub-collections (`/users/{userId}/quizResults/{resultId}` and `/users/{userId}/savedUniversities/{universityId}`). No user can access or scrape another student's test results.
2. **Result Integrity**: A `QuizResultRecord` must have its `userId` field match `request.auth.uid`. The primary, secondary, and tertiary RIASEC types must belong to `['R', 'I', 'A', 'S', 'E', 'C']`.
3. **Immutability of Historical Results**: Once created, historical quiz results cannot be tampered with or modified. `createdAt` must strictly equal `request.time`.
4. **Counseling Inquiries**: Any authenticated user can create an inquiry where `userId == request.auth.uid` with status `'pending'`. Only the author can read their own inquiries (`resource.data.userId == request.auth.uid`). Users cannot alter status to unauthorized values.
5. **Path Validation**: Document IDs must pass `isValidId()` regex and size constraints to prevent ID poisoning and Denial-of-Wallet attacks.

---

## 2. The Dirty Dozen Payloads (Expected to be REJECTED with PERMISSION_DENIED)

1. **Unauthenticated Read on User Profile**: Attempting to fetch `/users/user_abc` without an active auth token.
2. **Cross-User Profile Hijack**: Authenticated user `user_1` attempting to overwrite `/users/user_2`.
3. **Shadow Update on User Profile**: Attempting to write an unauthorized RBAC/admin flag (`isAdmin: true`) inside a profile update.
4. **Impersonated Quiz Result**: User `user_1` submitting a quiz result with `userId: "user_victim"` to pollute records.
5. **Tampered Result Timestamp**: Client attempting to forge `createdAt` with a backdated timestamp instead of `request.time`.
6. **Invalid RIASEC Code**: Submitting a `primaryType` of `"XYZ"` instead of `['R', 'I', 'A', 'S', 'E', 'C']`.
7. **Oversized String Injection**: Submitting an inquiry with content greater than 1,000 characters or an ID with 10KB junk characters.
8. **Malicious Path Traversal ID**: Attempting to write a document with an ID containing `../` or special control characters.
9. **Blanket Query Scraping**: Attempting a collection group query on `quizResults` across all students without filtering by `userId`.
10. **Inquiry Status Tampering**: Student attempting to update their own inquiry status to `'answered'` or mutating the `createdAt` timestamp.
11. **Cross-User Bookmark Deletion**: User `user_1` attempting to delete a bookmarked university belonging to `user_2`.
12. **Public Unrestricted Listing**: Attempting to list all inquiries across the school without matching `resource.data.userId == request.auth.uid`.
