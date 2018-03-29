using System.Web.Http;
using WebActivatorEx;
using backend_api;
using Swashbuckle.Application;
using System;
using System.Reflection;
using System.IO;

[assembly: PreApplicationStartMethod(typeof(SwaggerConfig), "Register")]

namespace backend_api
{
    public class SwaggerConfig
    {
        public static void Register()
        {
            var thisAssembly = typeof(SwaggerConfig).Assembly;

            GlobalConfiguration.Configuration
 .EnableSwagger(c =>
 {

     var baseDirectory = AppDomain.CurrentDomain.BaseDirectory + @"\bin\";
     var commentsFileName = Assembly.GetExecutingAssembly().GetName().Name + ".xml";
     var commentsFile = Path.Combine(baseDirectory, commentsFileName);


     c.SingleApiVersion("Assessment", "Backend API")
     .Contact(cc => cc
                 .Name("Mauricio Di Rienzo")
                 .Email("mauriciodirienzo@gmail.com")
                 );
     c.IncludeXmlComments(commentsFile);
 })

 .EnableSwaggerUi();


        }
    }
}
