namespace ReviewSite.Server.Models
{
    public class RatingContent
    {
        public int RatingContentId { get; set; }
        public int RatingId { get; set; }
        public string Type { get; set; } = string.Empty;

        public Selection UserSelection { get; set; } = Selection.None;

        public enum Selection { None, Like, Dislike }

    }
}
