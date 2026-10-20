namespace ReviewSite.Server.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string UserEmail { get; set; } = string.Empty;
        private List<Game> _Games { get; set; } = new List<Game>();
        public string Password { get; set; } = string.Empty;
    }
}
