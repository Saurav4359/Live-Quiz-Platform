const code_message = {
    400: "Invalid request schema",
    401: "Unauthorized, token missing or invalid",
    403: "Forbidden, teacher access required",
};
const resource_error = {
    Student: "Student not found",
    Class: "Class not found",
    User: "User not found",
    Teacher: "Forbidden, not class teacher",
};
export const errors = (code, message) => {
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
export const response = (data) => {
    return {
        success: true,
        data: data
    };
};
//# sourceMappingURL=error.js.map