using Microsoft.EntityFrameworkCore;
using Oppora.API.Models;


namespace Oppora.API.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions options)
        : base(options)
        {

        }


        public DbSet<User> Users { get; set; }

    }
}