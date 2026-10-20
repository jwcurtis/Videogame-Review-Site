namespace ReviewSite.Server.Models
{
    public class GameContent
    {
        public int GameContentId { get; set; }
        public int GameId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string ContentType { get; set; } = string.Empty;
        public string ContentDescription { get; set; } = string.Empty;
    }
}
