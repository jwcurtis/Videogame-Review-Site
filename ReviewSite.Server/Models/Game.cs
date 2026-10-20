namespace ReviewSite.Server.Models
{
    public class Game
    {
        public int GameId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<GameContent> Content { get; set; } = new List<GameContent>();
        public List<Comment> Comments { get; set; } = new List<Comment>();
        public int Rating { get; set; }
    }
}
