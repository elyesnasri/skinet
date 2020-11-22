using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route ("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductRepository _productsRepository;

        public ProductsController (IProductRepository productsRepository)
        {
            _productsRepository = productsRepository;

        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts ()
        {
            var products = await _productsRepository.GetProdcutsAsync ();

            return Ok (products);
        }

        [HttpGet ("{id}")]
        public async Task<Product> GetPtoduct (int id)
        {
            return await _productsRepository.GetProductByIdASync (id);
        }

        [HttpGet ("brands")]
        public async Task<ActionResult<IReadOnlyCollection<ProductBrand>>> GetProductBrands ()
        {
            return Ok (await _productsRepository.GetProductBrandsAsync ());
        }

        [HttpGet ("types")]
        public async Task<ActionResult<IReadOnlyCollection<ProductType>>> GetProductTypes ()
        {
            return Ok (await _productsRepository.GetProductTypesAsync ());
        }
    }
}
