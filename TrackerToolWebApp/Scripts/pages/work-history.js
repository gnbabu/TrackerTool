$(document).ready(function () {

    loadWorkHistory();

});

function loadWorkHistory(request) {

    WorkHistoryService.getAll(function (response) {

        renderWorkHistoryGrid(response);

    });

}

function renderWorkHistoryGrid(data) {

    $('#work-history-grid-container')
        .removeClass('d-none')
        .dataGrid({

            data: data,

            columns: [
                { key: 'employerName', title: 'Employer Name', type: 'text', sortable: true },
                { key: 'address', title: 'Address', type: 'text', sortable: true },
                { key: 'zipCode', title: 'Zip Code', type: 'text', sortable: true },
                { key: 'phone', title: 'Phone Number', type: 'text', sortable: true },
                { key: 'startDate', title: 'Start Date', type: 'date', sortable: true },
                { key: 'endDate', title: 'End Date', type: 'date', sortable: true }
            ],

            rowTemplate: function (row, columns) {

                return `
                    <tr class="work-main-row">

                        <td rowspan="2" class="employer-cell">${row.employerName}</td>

                        <td class="address-cell">
                            ${row.address !== '--'
                        ? `<a href="javascript:void(0)" class="address-link">${row.address}</a>`
                        : '--'}
                        </td>

                        <td class="purple-text">${row.zipCode}</td>
                        <td class="purple-text">${row.phone}</td>
                        <td class="purple-text">${row.startDate}</td>
                        <td class="purple-text">${row.endDate}</td>

                    </tr>

                    <tr class="reason-row">

                        <td class="reason-type">${row.reasonType}</td>
                        <td colspan="3" class="reason-text">
                            ${row.reasonText}
                        </td>
                        <td class="reason-action">
                            ${row.reasonType === "Reason for Gap"
                        ? `<span class="material-icons edit-icon">edit</span>`
                        : ``}
                        </td>
                    </tr>
                    `;
            },

            tableClass: 'maximus-base-table',
            gridTitle: '',
            noDataMessage: 'No work history found.',
            enableColumnFilters: true,
            enableSorting: true,
            dateFormat: 'MM-DD-YYYY',
            includeTime: true

        });

}