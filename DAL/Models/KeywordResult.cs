namespace DAL.Models
{
    public class KeywordResult : AuditableEntity
    {
        public int Id { get; set; }
        public string Keyword { get; set; }
        public int AdWordsAdverstiserCount { get; set; }
        public int LinkCounts { get; set; }
        public long TotalEstimatedCount { get; set; }
        public double TotalEstimatedTime { get; set; }
        public string FirstPageHTML { get; set; }

        public int KeywordFileId { get; set; }
        public KeywordFile KeywordFile { get; set; }
    }
}
