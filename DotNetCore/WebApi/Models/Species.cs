using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Species
    {
        private string formula;
        public string Formula {
            get { return formula; }
            set {
                Elements = GetElements(value);
                formula = value;
            }
        }
        public Species(string formula)
        {
            Formula = formula;
        }
        public Dictionary<string, int> Elements { get; private set; }

        private Dictionary<string, int> GetElements(string formula)
        {
            return new Dictionary<string, int>();
        }
    }
}
