using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace backend_api.Providers
{
    public class AuthorizeAttributeHandler : AuthorizeAttribute
    {
        protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
        {
            if (!HttpContext.Current.User.Identity.IsAuthenticated)         
                base.HandleUnauthorizedRequest(actionContext);
            else
                actionContext.Response = new HttpResponseMessage(HttpStatusCode.Forbidden);
        }
    }
}