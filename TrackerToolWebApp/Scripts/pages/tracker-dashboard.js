$(function () {

    $("#filterAccordion").maximusAccordion({
        allowMultiple: false,
        defaultOpen: 0
    });

    // ✅ Start Date Picker
    $('.start-date').maximusDatePicker({
        maxDate: new Date(),        // cannot select future
        onSelect: function (selectedDate) {

            console.log("Start Date:", selectedDate);

            // 🔥 Set minDate for End Date
            $('.end-date').maximusDatePicker({
                minDate: selectedDate
            });
        }
    });

    // ✅ End Date Picker
    $('.end-date').maximusDatePicker({
        maxDate: new Date(),        // cannot select future
        onSelect: function (selectedDate) {

            console.log("End Date:", selectedDate);
        }
    });

    $('#filterType').on('change', function () {

        let value = $(this).val();

        // 🔄 Reset UI first
        $('#textFilterContainer').addClass('d-none');
        $('#dateFilterContainer').addClass('d-none');
        $('#googleToggleContainer').addClass('d-none');

        $('#textFilterInput').val('');
        $('#startDate').val('');
        $('#endDate').val('');
        $('#googleToggle').prop('checked', false);

        if (value === 'order') {

            $('#textFilterContainer').removeClass('d-none');
            $('#textFilterLabel').text('Order Number');
            $('#textFilterInput').attr('placeholder', 'Enter Order Number');

            $('#googleToggleContainer').removeClass('d-none');
        }
        else if (value === 'service') {

            $('#textFilterContainer').removeClass('d-none');
            $('#textFilterLabel').text('Service Tag');
            $('#textFilterInput').attr('placeholder', 'Enter Service Tag');

            $('#googleToggleContainer').removeClass('d-none');
        }
        else if (value === 'date') {

            $('#dateFilterContainer').removeClass('d-none');

            $('#googleToggleContainer').removeClass('d-none');

            // 🔥 Re-init date pickers if needed
            $('.start-date').maximusDatePicker();
            $('.end-date').maximusDatePicker();
        }
    });

    // ✅ Apply Filters
    $('#applyFilters').on('click', function () {

        let filterType = $('#filterType').val();
        let request = {};

        // 🔤 Order Number
        if (filterType === 'order') {

            let orderNumber = $('#textFilterInput').val().trim();

            if (!orderNumber) {
                alert("Please enter Order Number");
                return;
            }

            request.orderNumber = orderNumber;
        }

        // 🔤 Service Tag
        else if (filterType === 'service') {

            let serviceTag = $('#textFilterInput').val().trim();

            if (!serviceTag) {
                alert("Please enter Service Tag");
                return;
            }

            request.serviceTag = serviceTag;
        }

        // 📅 Date Range
        else if (filterType === 'date') {

            let startDate = $('#startDate').val();
            let endDate = $('#endDate').val();

            // ✅ Validate using Moment.js
            if (startDate && !moment(startDate, "MM/DD/YYYY", true).isValid()) {
                alert("Invalid Start Date");
                return;
            }

            if (endDate && !moment(endDate, "MM/DD/YYYY", true).isValid()) {
                alert("Invalid End Date");
                return;
            }

            let start = startDate ? moment(startDate, "MM/DD/YYYY") : null;
            let end = endDate ? moment(endDate, "MM/DD/YYYY") : null;

            // ✅ Range validation
            if (start && end && end.isBefore(start)) {
                alert("End Date should be greater than Start Date");
                return;
            }

            // ✅ Optional: prevent future dates
            if (start && start.isAfter(moment())) {
                alert("Start Date cannot be in future");
                return;
            }

            if (end && end.isAfter(moment())) {
                alert("End Date cannot be in future");
                return;
            }

            // ✅ Convert to API format
            request.startDate = start ? start.format("YYYY-MM-DD") : null;
            request.endDate = end ? end.format("YYYY-MM-DD") : null;
        }

        else {
            alert("Please select a filter type");
            return;
        }
        
        console.log("Final Request:", request);

        // 🚀 Call Orders API
        loadOrders(request);
    });

    // 🔄 Reset Filters
    $('#resetFilters').on('click', function () {

        // 🔄 Reset values
        $('#filterType').val('');
        $('#textFilterInput').val('');
        $('#startDate').val('');
        $('#endDate').val('');
        $('#googleToggle').prop('checked', false);

        // 🔄 Hide all sections
        $('#textFilterContainer').addClass('d-none');
        $('#dateFilterContainer').addClass('d-none');
        $('#googleToggleContainer').addClass('d-none');
        renderOrdersGrid([]);
        //$('#orders-grid-container').addClass('d-none').empty();

    });


});

function loadOrders(request) {

    OrdersService.search(request, function (response) {

        // If your API returns { success, data }
        let data = response.data || response;

        renderOrdersGrid(data);

    }, function (err) {
        console.error("Failed to load orders", err);
    });
}

function renderOrdersGrid(data) {

    $('#orders-grid-container')
        .removeClass('d-none')
        .dataGrid({

            data: data,

            columns: [

                // 🔘 Action Column
                {
                    key: 'action',
                    title: 'Action',
                    type: 'text',
                    sortable: false,
                    cellTemplate: function (row) {
                        return `
                        <a href="javascript:void(0)"
                                data-order="${row.orderNumber}">
                            ${row.action || 'Release Hold'}
                        </a>`;
                    }
                },

                { key: 'onHoldAgeDays', title: 'On-Hold Age (Days)', type: 'number', sortable: true },

                {
                    key: 'orderNumber',
                    title: 'Order Number',
                    type: 'text',
                    sortable: true,
                    cellTemplate: function (row) {
                        return `
                        <a href="javascript:void(0)"
                           class="order-details"
                           data-order="${row.orderNumber}">
                           ${row.orderNumber}
                        </a>`;
                    }
                },

                { key: 'dpidIrn', title: 'DPID / IRN', type: 'text', sortable: true },
                { key: 'quote', title: 'Quote', type: 'text', sortable: true },
                { key: 'buid', title: 'BUID', type: 'text', sortable: true },
                { key: 'region', title: 'Region', type: 'text', sortable: true },
                { key: 'serviceTag', title: 'Service Tag', type: 'text', sortable: true },
                { key: 'customerSalesOrderNo', title: 'Customer Sales Order No', type: 'text', sortable: true },

                { key: 'tenantId', title: 'Tenant ID', type: 'text', sortable: true },
                { key: 'tenantDomain', title: 'Tenant Domain', type: 'text', sortable: true },

                { key: 'groupTag', title: 'Group Tag', type: 'text', sortable: true },
                { key: 'skuNumber', title: 'SKU Number', type: 'text', sortable: true },

                { key: 'statusComment', title: 'Status Comment', type: 'text', sortable: true },

                {
                    key: 'creationDate',
                    title: 'Creation Date',
                    type: 'date',
                    sortable: true
                },
                {
                    key: 'lastUpdateDate',
                    title: 'Last Update Date',
                    type: 'date',
                    sortable: true
                }

            ],

            tableClass: 'ui-base-table',
            gridTitle: '',
            noDataMessage: 'No orders found.',
            idProperty: 'orderNumber',

            enableRowSelection: false,
            enableAllColumnSearch: false,
            enableColumnFilters: true,
            enableSorting: true,

            dateFormat: 'MM-DD-YYYY',
            includeTime: false
        });

}

//Example usage:
//const ids = $('#grid')[0].getSelectedRows();

//$('#grid')[0].selectRow(5);

//$('#grid')[0].clearSelection();

//$('#grid')[0].toggleColumnVisibility('phone', false);  // Hides the "Phone" column

//$('#grid')[0].toggleColumnVisibility('phone', false);  // Hides the "Phone" column

//const selectedRows = $('#grid')[0].getSelectedRows();  // Get all selected row IDs
//console.log(selectedRows);

function clearCorrespondenceGrid() {

    const $grid = $('#correspondence-grid-container');

    $grid.empty();
    $grid.addClass('d-none');

}