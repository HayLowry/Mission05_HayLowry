using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission05_haylowry.Models
{
    public class GradeCalcModel
    {
        //data validation: make sure it's a percentage between 0-100
        [Range(0,100)]
        public sbyte assign { get; set; }
        [Range(0, 100)]
        public sbyte gp { get; set; }
        [Range(0, 100)]
        public sbyte quiz { get; set; }
        [Range(0, 100)]
        public sbyte me { get; set; }
        [Range(0, 100)]
        public sbyte fe { get; set; }
        [Range(0, 100)]
        public sbyte intex { get; set; }
    }
}
