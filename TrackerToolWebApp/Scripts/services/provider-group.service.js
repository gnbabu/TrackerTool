var ProviderGroupService = {

    getGroups: function (success) {
        ApiService.get("ProviderGroup/groups", success);
    }

};