using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdASync (int id);

        Task<IReadOnlyList<Product>> GetProdcutsAsync ();

        Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync ();

        Task<IReadOnlyList<ProductType>> GetProductTypesAsync ();
    }
}
