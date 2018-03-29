using System;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using System.Web.Http;
using backend_api.Providers;

[assembly: OwinStartup(typeof(backend_api.Startup))]

namespace backend_api
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            AuthProvider authProvider;
            OAuthAuthorizationServerOptions options;
            HttpConfiguration config;
            log4net.Config.XmlConfigurator.Configure();
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            authProvider = new AuthProvider();
            options = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(2),
                Provider = authProvider
            };
           
            app.UseOAuthAuthorizationServer(options);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            config = new HttpConfiguration();
            WebApiConfig.Register(config);
        }
    }
}