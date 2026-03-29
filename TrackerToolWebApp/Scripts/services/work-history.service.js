var WorkHistoryService = {

    getAll: function (success) {

        ApiService.get("WorkHistory", function (response) {
            if (success) success(response);
        });

    }

};