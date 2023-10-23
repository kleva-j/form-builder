export class NotFoundError extends Error {}
export class NotAuthorizedError extends Error {}

// User Errors
export class UserNotFoundError extends NotFoundError {}
export class UserNotAuthorizedError extends NotAuthorizedError {}

// Form Errors
export class FormNotFoundError extends Error {}
export class FormSubmissionError extends Error {}
