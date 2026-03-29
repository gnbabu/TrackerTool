$(function () {

    HospitalAffiliationService.getHospitalAffiliations(function (data) {
        renderHospitalAffiliationGrid(data);
    });

});

function renderHospitalAffiliationGrid(data) {

    $('#hospital-affiliation-grid-container')
        .removeClass('d-none')
        .dataGrid({

            data: data,

            columns: [
                { key: 'facilityName', title: 'Facility Name', type: 'text', sortable: true },
                { key: 'staffCategory', title: 'Staff Category', type: 'text', sortable: true },
                { key: 'statusofPrivileges', title: 'Status of Privileges', type: 'text', sortable: true },
                { key: 'is_Primary_Facility', title: 'Primary Facility', type: 'boolean', sortable: true },
                { key: 'startDate', title: 'Start Date', type: 'date', sortable: true },
                { key: 'sndDate', title: 'End Date', type: 'date', sortable: true }
            ],

            tableClass: 'maximus-base-table',
            gridTitle: '',
            noDataMessage: 'No hospital affiliations found.',
            idProperty: 'FacilityName', // Unique property to identify each row

            enableSorting: true,
            enableColumnFilters: false,
            enableAllColumnSearch: false,
            dateFormat: 'MM-DD-YYYY'
        });
}