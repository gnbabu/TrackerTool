var CorrespondenceService = {

    search: function (request, success) {

        ApiService.post("Correspondence/search", request, function (response) {
            if (success) success(response);
        });

    }

};