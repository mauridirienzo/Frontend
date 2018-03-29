using AutoMapper;
using backend_api.DTO;
using backend_api.Models;

public static class AutoMapperConfig
{
    public static void RegisterMappings()
    {
        Mapper.Initialize(cfg => {
            cfg.CreateMap<Client, ClientDTO>();
            cfg.CreateMap<Policy, PolicyDTO>();
            cfg.CreateMap<Policy, PolicyClientDTO>();
            //cfg.CreateMap<Client, ClientDTO>();
        });
    }
}