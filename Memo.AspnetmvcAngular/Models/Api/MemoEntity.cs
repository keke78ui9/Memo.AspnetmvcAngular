using MongoRepository;
using System;

namespace Memo.AspnetmvcAngular.Data
{
    public class MemoEntity : Entity
    {
        public string MemoText { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}