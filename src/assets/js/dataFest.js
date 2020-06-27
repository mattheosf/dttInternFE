export default class Fest {
    Name = "";
    City = "";
 	  Country = "";
    Picture = "";
    MonthHeld = "";
    href = "";
    latmaps = "";
    lngmaps = "";
    Pricing = "";
    Description = "";

    constructor(fname, fcity, fcountry, fpicture, fmonth, fhref, flatmaps, flngmaps, fpricing, fdesc) 
    {
      this.Name = fname;
      this.City = fcity;
      this.Country = fcountry;
      this.Picture = fpicture;
      this.MonthHeld = fmonth;
      this.href = fhref;
      this.latmaps = flatmaps;
      this.lngmaps = flngmaps;
      this.Pricing = fpricing;
      this.Description = fdesc;
    } 
}