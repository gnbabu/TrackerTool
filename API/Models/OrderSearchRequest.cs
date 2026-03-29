namespace API.Models
{
    public class OrderSearchRequest
    {
        public string OrderNumber { get; set; }
        public string ServiceTag { get; set; }

        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }

        public string Region { get; set; }
        public string Buid { get; set; }
    }
}
