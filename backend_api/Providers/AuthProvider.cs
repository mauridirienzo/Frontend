using backend_api.Repository;
using backend_api.Models;
using Microsoft.Owin.Security.OAuth;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace backend_api.Providers
{
    public class AuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated(); // 
            await Task.Delay(1);
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            ClaimsIdentity identity;
            User user;
            List<Role> roles;
            await Task.Delay(1);
            identity = new ClaimsIdentity(context.Options.AuthenticationType);

            user = new UserRepositoryImpl().validateUser(context.UserName, context.Password);

            if(user == null)
            {
                context.SetError("invalid_grant", "Provided username and password is incorrect");
      
                return;
            }

             roles = new UserRoleRepositoryImpl().getRoleByUserId(user.id);

            foreach (Role role in roles) {
                identity.AddClaim(new Claim(ClaimTypes.Role, role.rol));
            }
         
             identity.AddClaim(new Claim("username", user.userName));
             identity.AddClaim(new Claim(ClaimTypes.Name, user.userName));
             context.Validated(identity);       
        }
    }
}