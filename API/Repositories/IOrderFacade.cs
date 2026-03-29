using API.Models;

namespace API.Repositories
{
    public interface IOrderFacade
    {
        List<OrderRecord> SearchOrders(OrderSearchRequest request);
        object ReleaseHold(List<string> orderNumbers);
    }
}
