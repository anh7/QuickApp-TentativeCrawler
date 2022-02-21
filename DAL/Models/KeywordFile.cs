using System.Collections.Generic;

namespace DAL.Models
{
    public class KeywordFile : AuditableEntity
    {
        public int Id { get; set; }
        public string FileContent { get; set; }
        public ICollection<KeywordResult> KeywordResult { get; set; }
    }
}
