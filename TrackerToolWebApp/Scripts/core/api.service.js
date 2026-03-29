var ApiService = (function () {

    function getToken() {
        return localStorage.getItem("token");
    }

    function request(method, url, data, success) {

        var headers = {};

        var token = getToken();
        if (token) {
            headers["Authorization"] = "Bearer " + token;
        }

        $.ajax({
            url: AppConfig.apiUrl + url,
            type: method,
            data: data ? JSON.stringify(data) : null,
            contentType: "application/json",
            dataType: "json",
            headers: headers,

            success: function (response) {
                if (success) success(response);
            },

            error: function (xhr, status, error) {
                console.error("API Error:", xhr);
            }
        });
    }

    return {

        get: function (url, success) {
            request("GET", url, null, success);
        },

        post: function (url, data, success) {
            request("POST", url, data, success);
        },

        put: function (url, data, success) {
            request("PUT", url, data, success);
        },

        delete: function (url, success) {
            request("DELETE", url, null, success);
        }
    };

})();