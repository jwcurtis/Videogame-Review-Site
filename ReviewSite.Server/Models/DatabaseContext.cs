namespace ReviewSite.Server.Models
{
    using Microsoft.EntityFrameworkCore;
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }
        public DbSet<Game> Games => Set<Game>();
        public DbSet<GameContent> GameContents => Set<GameContent>();
        public DbSet<Rating> Ratings => Set<Rating>();
        public DbSet<RatingContent> RatingContents => Set<RatingContent>();
        public DbSet<Comment> Comments => Set<Comment>();
        public DbSet<User> Users => Set<User>();
    }
}
