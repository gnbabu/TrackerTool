var ReportsService = {

    // Optional: You can add other methods, such as fetching reports by date range
    getReportsByDateRange: function (startDate, endDate, success) {
        var request = {
            startDate: startDate,
            endDate: endDate
        };

        //var url = `Reports/GetReportsByDateRange?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;

        ApiService.get('Reports/reports-by-date-range', success);
    }
};