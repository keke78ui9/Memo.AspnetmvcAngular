using System;

namespace Memo.AspnetmvcAngular.Models.Api
{
    public class MemoWriteModel
    {
        public string Id { get; set; }
        public string MemoText { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}