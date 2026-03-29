$(function () {

    // By default, show the Report Management section
    $('#reportManagement').show();
    $('#myDrafts').hide();

    // Show Report Management on button click
    $('#btnReportManagement').click(function () {
        $('#reportManagement').show();
        $('#myDrafts').hide();
    });

    // Show My Drafts on button click
    $('#btnMyDrafts').click(function () {
        $('#myDrafts').show();
        $('#reportManagement').hide();
    });



    $("#standardReportsAccordion").maximusAccordion({
        allowMultiple: false,
        defaultOpen: 0
    });

    $("#customReportsAccordion").maximusAccordion({
        allowMultiple: false
    });



    // Initialize Clean File Report Modal
    var cleanFileReportModal = $('#cleanFileReportModal').modalPlugin({
        modalId: '#cleanFileReportModal',
        modalWidth: '700px',
        onSave: function ($modal) {
            // Read data from modal
            var formData = {
                startDate: $modal.find('#startDate').val(),
                endDate: $modal.find('#endDate').val()
            };

            // Example: Validate data
            //if (!formData.startDate || !formData.endDate) {
            //    alert('Please fill both start and end dates!');
            //    return;
            //}

            window.location.href = 'ReportViewer.aspx';

            // Process or save the data (e.g., send to an API)
            console.log('Clean Report Data:', formData);

            // Close modal after saving data
            cleanFileReportModal.close();
        },

        onClose: function () {
            console.log('Clean File Report modal closed');
        }
    });



    let startDateValue = null;

    // START DATE
    $('#startDate').maximusDatePicker({
        dateFormat: 'MM/DD/YYYY',

        onDateSelect: function (date) {

            startDateValue = date;

            // 🔥 Re-init END DATE with minDate
            $('#endDate').maximusDatePicker({
                dateFormat: 'MM/DD/YYYY',
                minDate: moment(date),   // cannot select before start
            });

            console.log("Start Date:", date);
        }
    });

    // END DATE (initial)
    $('#endDate').maximusDatePicker({
        dateFormat: 'MM/DD/YYYY',

        onDateSelect: function (date) {

            if (startDateValue && moment(date).isBefore(startDateValue, 'day')) {
                alert("End Date cannot be before Start Date ❌");
                $('#endDate').val('');
                return;
            }

            console.log("End Date:", date);
        }
    });


    // Initialize Select Template Modal
    var selectTemplateModal = $('#selectTemplateModal').modalPlugin({
        modalId: '#selectTemplateModal',
        modalWidth: '500px',

        onSave: function ($modal) {
            // Read data from modal
            var formData = {
                template: $modal.find('#templateSelect').val(),
                reportName: $modal.find('#reportName').val()
            };

            // Example: Validate data
            //if (!formData.template || !formData.reportName) {
            //    alert('Please select a template and enter a report name!');
            //    return;
            //}

            // Process or save the data (e.g., send to an API)
            console.log('Template Data:', formData);

            // Close modal after saving data
            selectTemplateModal.close();
        },

        onClose: function () {
            console.log('Select Template modal closed');
        }
    });

    // Open the Select Template Modal when the "New Report" button is clicked
    $('#newReportBtn').on('click', function () {
        debugger;
        selectTemplateModal.open(); // Open the modal programmatically
    });

    // Open the Select Template Modal when the "New Report" button is clicked
    $('.btn-more').on('click', function () {
        cleanFileReportModal.open(); // Open the modal programmatically
    });


    // Handle Save and Close for Clean File Report modal
    $('#saveAndCloseReport').on('click', function () {
        cleanFileReportModal.save();  // Call the plugin's save method
    });

    // Handle Save and Close for Select Template modal
    $('#saveAndCloseTemplate').on('click', function () {
        selectTemplateModal.save();  // Call the plugin's save method
    });

    // Handle Cancel buttons or closing the modal manually if needed
    $('#cancelCleanFileReport').on('click', function () {
        cleanFileReportModal.close();  // Close the modal manually
    });

    $('#cancelSelectTemplate').on('click', function () {
        selectTemplateModal.close();  // Close the modal manually
    });

});