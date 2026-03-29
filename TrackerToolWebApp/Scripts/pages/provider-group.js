$(function () {

    const request = {
        regId: "string",
        providerId: "string",
        npi: "string",
        dateFrom: "2026-03-04T17:31:24.619Z",
        dateTo: "2026-03-04T17:31:24.619Z"
    };

    loadGroups(request);

});

function loadGroups(request) {

    ProviderGroupService.getGroups(function (response) {

        renderGroupsGrid(response);

    });

}

function renderGroupsGrid(data) {

    $('#provider-groups-grid-container')
        .removeClass('d-none')
        .dataGrid({

            data: data,

            columns: [
                { key: 'groupName', title: 'Group Name', type: 'text', sortable: true },
                { key: 'npi', title: 'NPI', type: 'text', sortable: true },
                { key: 'startDate', title: 'Start Date', type: 'date', sortable: true },
                { key: 'endDate', title: 'End Date', type: 'date', sortable: true },
                { key: 'status', title: 'Status', type: 'text', sortable: true }
            ],

            tableClass: 'maximus-base-table',
            gridTitle: '',
            noDataMessage: 'No correspondence found.',
            idProperty: 'correspondenceId',

            enableAllColumnSearch: false,
            enableColumnFilters: false,
            enableSorting: true,

            dateFormat: 'MM-DD-YYYY',
            includeTime: false
        });

}

function clearCorrespondenceGrid() {

    const $grid = $('#correspondence-grid-container');

    $grid.empty();
    $grid.addClass('d-none');

}