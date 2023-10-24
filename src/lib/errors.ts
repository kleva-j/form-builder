export class NotFoundError extends Error {}
export class NotAuthorizedError extends Error {}

// User Errors
export class UserNotFoundError extends NotFoundError {}
export class UserNotAuthorizedError extends NotAuthorizedError {}

// Form Errors
export class FormNotFoundError extends NotFoundError {
  message = "Form not found";
}
export class FormNotValidError extends Error {
  message = "Form not valid";
}
export class FormSubmissionError extends Error {
  message = "Something went wrong";
}
