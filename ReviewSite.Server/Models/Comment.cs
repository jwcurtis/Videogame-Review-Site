namespace ReviewSite.Server.Models
{
    public class Comment
    {
        public int CommentId { get; set; }
        public int GameId { get; set; }
        public int UserId { get; set; }
        public string CommentValue { get; set; } = string.Empty;
        public int RatingValue { get; set; } = 0;
    }
}
