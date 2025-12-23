interface error_message {
  success: false;
  error: string;
}

const code_message: Record<number, string> = {
  400: "Invalid request schema",
  401: "Unauthorized, token missing or invalid",
  403: "Forbidden, teacher access required",
};
  const resource_error: Record<string, string> = {
  Student: "Student not found",
  Class: "Class not found",
  User: "User not found",
  Teacher: "Forbidden, not class teacher",
};
export const error = (code: number, message?: string): error_message => {
  if (message) {
    return {
      success: false,
      error: resource_error[message] ?? "Unknown error",
    };
  }

  return {
    success: false,
    error: code_message[code] ?? "Unknown error",
  };
};
