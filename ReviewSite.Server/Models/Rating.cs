namespace ReviewSite.Server.Models
{
    public class Rating
    {
        public int RatingId { get; set; }
        public int GameId { get; set; } = 0;
        public int UserId { get; set; }
        public List<Comment> Comments { get; set; } = new List<Comment>();
        public int RatingValue { get; set; } = 0;
        public List<RatingContent> RatingContents { get; set; } = new List<RatingContent>();

    }
}
