$(function () {

    const request = {
        startDate: "2026-03-01T00:00:00.000Z", // Example start date
        endDate: "2026-03-31T23:59:59.999Z"   // Example end date
    };
    debugger;
    loadReports(request);

});

function loadReports(request) {

    // Fetch reports by date range using the ReportsService
    ReportsService.getReportsByDateRange(request.startDate, request.endDate, function (response) {
        debugger;
        renderReportsGrid(response);
    });
}

function renderReportsGrid(data) {

    // Initialize the grid and populate with reports data
    $('#reports-grid-container')
        .removeClass('d-none')
        .dataGrid({

            data: data,

            columns: [
                { key: 'credentialingTaskType', title: 'Credentialing Task Type', type: 'text', sortable: true },
                { key: 'startDate', title: 'Start Date', type: 'date', sortable: true },
                { key: 'providerType', title: 'Provider Type', type: 'text', sortable: true },
                { key: 'providerName', title: 'Provider Name', type: 'text', sortable: true },
                { key: 'providerSpecialty', title: 'Provider Specialty', type: 'text', sortable: true },
                { key: 'medicaidId', title: 'Medicaid ID', type: 'text', sortable: true },
                { key: 'ProviderNpi', title: 'Provider NPI', type: 'date', sortable: true },
                { key: 'primaryCityState', title: 'Primary City/State', type: 'text', sortable: true },
                { key: 'primaryCount', title: 'Primary Count', type: 'text', sortable: true },
                { key: 'commitDecision', title: 'Commit Decision', type: 'date', sortable: true }
            ],

            tableClass: 'maximus-base-table',
            gridTitle: '',
            noDataMessage: 'No reports found.',
            idProperty: 'MedicaidId', // Unique key for each report
            enableRowSelection: false,
            enableAllColumnSearch: false,
            enableColumnFilters: true,
            enableSorting: true,
            dateFormat: 'MM-DD-YYYY',
            includeTime: false
        });
}