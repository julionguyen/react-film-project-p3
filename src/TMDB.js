export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY
export const TMDB_NO_POSTER_URL = "no-poster-available.jpg"
export const TMDB_NO_IMAGE_URL = "No_image_available_1280.png"
export const TMDB_RESTRICTED_X18 = "classification-x18-square.png"
export const TMDB_ERRORS = [
    {
        code: 1,
        status:	200,
        message: "Success"
    },
    {
        code: 2,
        status: 501,
        message: "Invalid service: this service does not exist."
    },
    {
        code: 3,
        status: 401,
        message: "Authentication failed: You do not have permissions to access the service."
    },
    {
        code: 4,
        status: 405,
        message: "Invalid format: This service doesn't exist in that format."
    },
    {
        code: 5,
        status: 422,
        message: "Invalid parameters: Your request parameters are incorrect."
    },
    {
        code: 6,
        status: 404,
        message: "Invalid id: The pre-requisite id is invalid or not found."
    },
    {
        code: 7,
        status: 401,
        message: "Invalid API key: You must be granted a valid key."
    },
    {
        code: 8,
        status: 403,
        message: "Duplicate entry: The data you tried to submit already exists."
    },
    {
        code: 9,
        status: 503,
        message: "Service offline: This service is temporarily offline, try again later."
    },
    {
        code: 10,
        status: 401,
        message: "Suspended API key: Access to your account has been suspended, contact TMDB."
    },
    {
        code: 11,
        status: 500,
        message: "Internal error: Something went wrong, contact TMDB."
    },
    {
        code: 12,
        status: 201,
        message: "The item/record was updated successfully."
    },
    {
        code: 13,
        status: 200,
        message: "The item/record was deleted successfully."
    },
    {
        code: 14,
        status: 401,
        message: "Authentication failed."
    },
    {
        code: 15,
        status: 500,
        message: "Failed."
    },
    {
        code: 16,
        status: 401,
        message: "Device denied."
    },
    {
        code: 17,
        status: 401,
        message: "Session denied."
    },
    {
        code: 18,
        status: 400,
        message: "Validation failed."
    },
    {
        code: 19,
        status: 400,
        message:"Invalid accept header."
    },
    {
        code: 20,
        status: 422,
        message: "Invalid date range: Should be a range no longer than 14 days."
    },
    {
        code: 21,
        status: 200,
        message: "Entry not found: The item you are trying to edit cannot be found."
    },
    {
        code: 22,
        status: 400,
        message: "Invalid page: Pages start at 1 and max at 500. They are expected to be an integer."
    },
    {
        code: 23,
        status: 400,
        message: "Invalid date: Format needs to be YYYY-MM-DD."
    },
    {
        code: 24,
        status: 504,
        message: "Your request to the backend server timed out. Try again."
    },
    {
        code: 25,
        status: 429,
        message: "Your request count (#) is over the allowed limit of (40)."
    },
    {
        code: 26,
        status: 400,
        message: "You must provide a username and password."
    },
    {
        code: 27,
        status: 400,
        message: "Too many append to response objects: The maximum number of remote calls is 20."
    },
    {
        code: 28,
        status: 400,
        message: "Invalid timezone: Please consult the documentation for a valid timezone."
    },
    {
        code: 29,
        status: 400,
        message: "You must confirm this action: Please provide a confirm=true parameter."
    },
    {
        code: 30,
        status: 401,
        message: "Invalid username and/or password: You did not provide a valid login."
    },
    {
        code: 31,
        status: 401,
        message: "Account disabled: Your account is no longer active. Contact TMDB if this is an error."
    },
    {
        code: 32,
        status: 401,
        message: "Email not verified: Your email address has not been verified."
    },
    {
        code: 33,
        status: 401,
        message: "Invalid request token: The request token is either expired or invalid."
    },
    {
        code: 34,
        status: 404,
        message: "The resource you requested could not be found."
    },
    {
        code: 35,
        status: 401,
        message: "Invalid token."
    },
    {
        code: 36,
        status: 401,
        message: "This token hasn't been granted write permission by the user."
    },
    {
        code: 37,
        status: 404,
        message: "The requested session could not be found."
    },
    {
        code: 38,
        status: 401,
        message: "You don't have permission to edit this resource."
    },
    {
        code: 39,
        status: 401,
        message: "This resource is private."
    },
    {
        code: 40,
        status: 200,
        message: "Nothing to update."
    },
    {
        code: 41,
        status: 422,
        message: "This request token hasn't been approved by the user."
    },
    {
        code: 42,
        status: 405,
        message: "This request method is not supported for this resource."
    },
    {
        code: 43,
        status: 502,
        message: "Couldn't connect to the backend server."
    },
    {
        code: 44,
        status: 500,
        message: "The ID is invalid."
    },
    {
        code: 45,
        status: 403,
        message: "This user has been suspended."
    },
    {
        code: 46,
        status: 503,
        message: "The API is undergoing maintenance. Try again later."
    },
    {
        code: 47,
        status: 400,
        message: "The input is not valid."
    }

]