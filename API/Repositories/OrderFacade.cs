using API.Models;

namespace API.Repositories
{
    public class OrderFacade : IOrderFacade
    {
        public List<OrderRecord> SearchOrders(OrderSearchRequest request)
        {
            // var data = GetOrdersData();

            var data = GetOrdersDataAutoGenerate();

            return data;
            // 🔍 Order Number filter
            if (!string.IsNullOrWhiteSpace(request.OrderNumber))
            {
                data = data
                    .Where(x => x.OrderNumber.Contains(request.OrderNumber))
                    .ToList();
            }

            // 🔍 Service Tag filter
            if (!string.IsNullOrWhiteSpace(request.ServiceTag))
            {
                data = data
                    .Where(x => x.ServiceTag != null && x.ServiceTag.Contains(request.ServiceTag))
                    .ToList();
            }

            // 📅 Date filters
            if (request.StartDate.HasValue)
            {
                data = data
                    .Where(x => x.CreationDate >= request.StartDate.Value)
                    .ToList();
            }

            if (request.EndDate.HasValue)
            {
                data = data
                    .Where(x => x.CreationDate <= request.EndDate.Value)
                    .ToList();
            }

            // 🌍 Region filter
            if (!string.IsNullOrWhiteSpace(request.Region))
            {
                data = data
                    .Where(x => x.Region == request.Region)
                    .ToList();
            }

            // 🏢 BUID filter
            if (!string.IsNullOrWhiteSpace(request.Buid))
            {
                data = data
                    .Where(x => x.Buid == request.Buid)
                    .ToList();
            }

            return data;
        }


        public object ReleaseHold(List<string> orderNumbers)
        {
            // Mock logic – replace with DB update later
            return new
            {
                Success = true,
                Message = "Hold released successfully",
                ReleasedOrders = orderNumbers
            };
        }

        // 👉 Your Manual 25 Records (reuse here)
        private List<OrderRecord> GetOrdersData()
        {
            var today = DateTime.Now;

            return new List<OrderRecord>
        {
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=8, OrderNumber="103183001", DpidIrn="2009801531921", Quote="3000200423736", Buid="11", Region="DAO", CreationDate=today.AddDays(-8) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=7, OrderNumber="103183002", DpidIrn="7400015082545", Quote="3400020231966", Buid="6161", Region="EMEA", CreationDate=today.AddDays(-7) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=6, OrderNumber="103183003", DpidIrn="7400015082546", Quote="3400020231967", Buid="6161", Region="EMEA", CreationDate=today.AddDays(-6) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=9, OrderNumber="103183004", DpidIrn="7400015081309", Quote="340002037732", Buid="202", Region="EMEA", CreationDate=today.AddDays(-9) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=10, OrderNumber="103183005", DpidIrn="7400015081310", Quote="340002037733", Buid="202", Region="EMEA", CreationDate=today.AddDays(-10) },

            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=5, OrderNumber="103183006", DpidIrn="7400015081173", Quote="340002037629", Buid="202", Region="EMEA", CreationDate=today.AddDays(-5) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=8, OrderNumber="103183007", DpidIrn="7400015081174", Quote="340002037630", Buid="202", Region="EMEA", CreationDate=today.AddDays(-8) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=6, OrderNumber="103183008", DpidIrn="7400015081175", Quote="340002037631", Buid="202", Region="EMEA", CreationDate=today.AddDays(-6) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=7, OrderNumber="103183009", DpidIrn="7400015082702", Quote="340002038720", Buid="909", Region="EMEA", CreationDate=today.AddDays(-7) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=8, OrderNumber="103183010", DpidIrn="AT2009-8007-39004", Quote="13336831", Buid="3838", Region="EMEA", CreationDate=today.AddDays(-8) },

            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=9, OrderNumber="103183011", DpidIrn="AT2009-8007-39005", Quote="13336832", Buid="3838", Region="EMEA", CreationDate=today.AddDays(-9) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=4, OrderNumber="103183012", DpidIrn="AT2009-8007-39006", Quote="13336833", Buid="3838", Region="EMEA", CreationDate=today.AddDays(-4) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=6, OrderNumber="103183013", DpidIrn="7400015089991", Quote="340002099991", Buid="11", Region="DAO", CreationDate=today.AddDays(-6) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=7, OrderNumber="103183014", DpidIrn="7400015089992", Quote="340002099992", Buid="11", Region="DAO", CreationDate=today.AddDays(-7) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=8, OrderNumber="103183015", DpidIrn="7400015089993", Quote="340002099993", Buid="11", Region="DAO", CreationDate=today.AddDays(-8) },

            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=9, OrderNumber="103183016", DpidIrn="7400015088881", Quote="340002088881", Buid="202", Region="APJ", CreationDate=today.AddDays(-9) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=10, OrderNumber="103183017", DpidIrn="7400015088882", Quote="340002088882", Buid="202", Region="APJ", CreationDate=today.AddDays(-10) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=6, OrderNumber="103183018", DpidIrn="7400015088883", Quote="340002088883", Buid="202", Region="APJ", CreationDate=today.AddDays(-6) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=5, OrderNumber="103183019", DpidIrn="7400015087771", Quote="340002077771", Buid="909", Region="NA", CreationDate=today.AddDays(-5) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=7, OrderNumber="103183020", DpidIrn="7400015087772", Quote="340002077772", Buid="909", Region="NA", CreationDate=today.AddDays(-7) },

            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=8, OrderNumber="103183021", DpidIrn="7400015087773", Quote="340002077773", Buid="909", Region="NA", CreationDate=today.AddDays(-8) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=9, OrderNumber="103183022", DpidIrn="7400015086661", Quote="340002066661", Buid="6161", Region="EMEA", CreationDate=today.AddDays(-9) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=10, OrderNumber="103183023", DpidIrn="7400015086662", Quote="340002066662", Buid="6161", Region="EMEA", CreationDate=today.AddDays(-10) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=6, OrderNumber="103183024", DpidIrn="7400015086663", Quote="340002066663", Buid="6161", Region="EMEA", CreationDate=today.AddDays(-6) },
            new OrderRecord { Action="CollectIDRData", OnHoldAgeDays=7, OrderNumber="103183025", DpidIrn="7400015086664", Quote="340002066664", Buid="6161", Region="EMEA", CreationDate=today.AddDays(-7) }
        };
        }

        private List<OrderRecord> GetOrdersDataAutoGenerate()
        {
            var today = DateTime.Now;
            var list = new List<OrderRecord>(5000);

            var regions = new[] { "EMEA", "DAO", "APJ", "NA" };
            var buids = new[] { "11", "202", "909", "6161", "3838" };
            var domains = new[] { "contoso.com", "microsoft.com", "example.org", "demo.net" };
            var groupTags = new[] { "GRP-A", "GRP-B", "GRP-C" };
            var statusComments = new[] { "Pending", "In Progress", "Completed", "On Hold" };

            for (int i = 1; i <= 5000; i++)
            {
                var region = regions[i % regions.Length];
                var buid = buids[i % buids.Length];

                list.Add(new OrderRecord
                {
                    // Core fields
                    Action = "CollectIDRData",
                    OnHoldAgeDays = (i % 10) + 1,
                    OrderNumber = (103183000 + i).ToString(),

                    DpidIrn = i % 5 == 0
                        ? $"AT{2000 + (i % 30)}-8007-{39000 + i}"
                        : (7400015000000 + i).ToString(),

                    Quote = i % 4 == 0
                        ? (13330000 + i).ToString()
                        : (340002000000 + i).ToString(),

                    Buid = buid,
                    Region = region,

                    // ✅ Newly added fields (NOW FILLED)
                    ServiceTag = $"SRV-{100000 + i}",
                    CustomerSalesOrderNo = $"CSO-{200000 + i}",
                    TenantId = $"TEN-{300000 + i}",
                    TenantDomain = domains[i % domains.Length],
                    GroupTag = groupTags[i % groupTags.Length],
                    SkuNumber = $"SKU-{400000 + i}",
                    StatusComment = statusComments[i % statusComments.Length],

                    // Dates
                    CreationDate = today.AddDays(-(i % 15)),
                    LastUpdateDate = today.AddDays(-(i % 7))
                });
            }

            return list;
        }
    }
}
