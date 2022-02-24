using Microsoft.AspNetCore.Mvc;
using DAL;
using AutoMapper;

namespace QuickApp.Controllers
{
    [Route("api/[controller]")]
    public class KeywordController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;


        public KeywordController(IMapper mapper, IUnitOfWork unitOfWork)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        // POST api/keyword
        [HttpPost]
        public IActionResult Post()
        {
            var file = Request.Form.Files[0];

            return Ok();
        }
    }
}
