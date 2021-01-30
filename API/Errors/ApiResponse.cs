using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }

        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefauktMessageForStatusCode(statusCode);

        }

        private string GetDefauktMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "Bad request, you have made",
                401 => "Authorized, your are not",
                404 => "Resource was not found",
                500 => "Intern Error",
                _ => null
            };
        }
    }
}
