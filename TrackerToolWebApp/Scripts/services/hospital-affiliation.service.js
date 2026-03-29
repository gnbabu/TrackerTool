var HospitalAffiliationService = {

    getHospitalAffiliations: function (success) {
        ApiService.get("HospitalAffiliation/list", success);
    }

};