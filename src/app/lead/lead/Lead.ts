export class Lead {
    MemberName: string;
    MemberNumber: number;
    CompanyRegistration: string;
    ChurchName: string;
    Email: string;
    MobileNumber: string;
    IDNumber: string;
    Product: string;
    QuoteDate: Date;
    NoOFMembers: number;
    PremiumPerEmployee: number;
    ClientType: string;
    NoOfEmployees: number;
    PremiumPerMember: number;
    EarningsDeclared: number;
    Search: string;
    QuoteAmount: number;
    QuoteNumber: number;
    Landline: number;
    Location: string;
    Comments: string;
    ContactNumber: number;
    constructor() {
        this.ContactNumber = 555334;
        this.Comments = `
      email will be sent to client containing quote link and payment options then client 
      can continue from there. Alternatively, the client can choose to 
      have debit orders run (functionality to be covered fully in billing FRS)  
    `;
        this.Email = "nmbatha@randmutual.co.za";
        this.Landline = 891827333;
        this.MemberName = "Virus";
        this.MemberNumber = 3241;
        this.QuoteDate = new Date("2017-11-13 14:06:52.033");
        this.QuoteNumber = 321;
        this.ClientType = "";
        this.Location = "";
    }
}