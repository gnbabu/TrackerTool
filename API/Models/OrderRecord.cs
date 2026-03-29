namespace API.Models
{
    public class OrderRecord
    {
        public string Action { get; set; }              // UI action (Collect IDR Data)
        public int OnHoldAgeDays { get; set; }          // Calculated or static
        public string OrderNumber { get; set; }
        public string DpidIrn { get; set; }
        public string Quote { get; set; }
        public string Buid { get; set; }
        public string Region { get; set; }

        // Existing fields (keep if needed)
        public string ServiceTag { get; set; }
        public string CustomerSalesOrderNo { get; set; }
        public string TenantId { get; set; }
        public string TenantDomain { get; set; }
        public string GroupTag { get; set; }
        public string SkuNumber { get; set; }
        public string StatusComment { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime LastUpdateDate { get; set; }
    }
}
