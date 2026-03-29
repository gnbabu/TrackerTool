var OrdersService = {

    search: function (request, success) {
        ApiService.post("Orders/search", request, function (response) {
            if (success) success(response);
        });

    }

};