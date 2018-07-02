import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Lead } from '../Lead'
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'


@Component({
  selector: 'leads-details-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  lead: Lead;
  leadForm: FormGroup;
  Locations: any[];
  ClientTypes: any[];

  constructor(fb: FormBuilder) {
    this.Locations = [
      { value: '1', viewValue: 'Gauteng' },
      { value: '2', viewValue: 'Eastern Cape' },
      { value: '3', viewValue: 'Western Cape' },
      { value: '4', viewValue: 'Northern Cape' },
      { value: '5', viewValue: 'North West' },
      { value: '6', viewValue: 'Free State' },
      { value: '7', viewValue: 'Mpumalanga' },
      { value: '8', viewValue: 'Kwazulu Natal' },
      { value: '9', viewValue: 'Gauteng' }
    ];
    this.lead = new Lead();
    this.leadForm = fb.group({
      memberName: new FormControl(this.lead.MemberName, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      memberNumber: new FormControl(this.lead.MemberNumber, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      companyRegistration: new FormControl(this.lead.CompanyRegistration, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      churchName: new FormControl(this.lead.ChurchName, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      email: new FormControl(this.lead.Email, [
        Validators.required,
        Validators.email
      ]),
      mobileNumber: new FormControl(this.lead.MobileNumber, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      idNumber: new FormControl(this.lead.IDNumber, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      product: new FormControl(this.lead.Product, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      quoteDate: new FormControl(this.lead.QuoteDate, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")
      ]),
      noOFMembers: new FormControl(this.lead.NoOFMembers, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")      
      ]),
      premiumPerEmployee: new FormControl(this.lead.PremiumPerEmployee, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")   
      ]),
      clientType: new FormControl(this.lead.ClientType, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      noOfEmployees: new FormControl(this.lead.NoOfEmployees,
        [Validators.required,
          // Validators.pattern("[^ @]*@[^ @]*")       
        ]),
      premiumPerMember: new FormControl(this.lead.PremiumPerMember, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      earningsDeclared: new FormControl(this.lead.EarningsDeclared, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      comments: new FormControl(this.lead.Comments, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      contactNumber: new FormControl(this.lead.ContactNumber, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      location: new FormControl(this.lead.Location, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      quoteNumber: new FormControl(this.lead.QuoteNumber, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      landline: new FormControl(this.lead.Landline, [
        Validators.required,
        // Validators.pattern("[^ @]*@[^ @]*")       
      ]),
      quoteAmount: new FormControl(this.lead.QuoteAmount)
    });
  }
  formControlByName(controlName: string): any {
    // console.log("controlName = " + controlName);
    return this.leadForm.get(controlName);
  }
  getIdNumberMessage() {
    return this.idNumber.hasError('required') ? `You must enter a value` :
        '';
  }
  get idNumber(): any {
    return this.leadForm.get('idNumber');
  }
  getMobileNumberMessage() {
    return this.mobileNumber.hasError('required') ? `You must enter a value` :
        '';
  }
  get mobileNumber(): any {
    return this.leadForm.get('mobileNumber');
  }
  getChurchNameMessage() {
    return this.churchName.hasError('required') ? `You must enter a value` :
        '';
  }
  get churchName(): any {
    return this.leadForm.get('churchName');
  }
  getCompanyRegistrationMessage() {
    return this.companyRegistration.hasError('required') ? `You must enter a value` :
        '';
  }
  get companyRegistration(): any {
    return this.leadForm.get('companyRegistration');
  }
  getMemberNumberMessage() {
    return this.memberNumber.hasError('required') ? `You must enter a value` :
        '';
  }
  get memberNumber(): any {
    return this.leadForm.get('memberNumber');
  }
  getProductErrorMessage() {
    return this.quoteDate.hasError('required') ? `You must enter a value` :
        '';
  }
  get product(): any {
    return this.leadForm.get('product');
  }
  getQuoteDateErrorMessage() {
    return this.quoteDate.hasError('required') ? `You must enter a value` :
        '';
  }
  get quoteDate(): any {
    return this.leadForm.get('quoteDate');
  }
  getNoOFMembersErrorMessage() {
    return this.noOFMembers.hasError('required') ? `You must enter a value` :
        '';
  }
  get noOFMembers(): any {
    return this.leadForm.get('noOFMembers');
  }
  getPremiumPerEmployee() {
    return this.premiumPerEmployee.hasError('required') ? `You must enter a value` :
        '';
  }
  get premiumPerEmployee(): any {
    return this.leadForm.get('premiumPerEmployee');
  }
  getClientTypeEmployee() {
    return this.clientType.hasError('required') ? `You must enter a value` :
        '';
  }
  get clientType(): any {
    return this.leadForm.get('clientType');
  }
  getNoOfEmployeesEmployee() {
    return this.noOfEmployees.hasError('required') ? `You must enter a value` :
        '';
  }
  get noOfEmployees(): any {
    return this.leadForm.get('noOfEmployees');
  }
  getLocationErrorMessage() {
    return this.location.hasError('required') ? `You must enter a value` :
        '';
  }
  get location(): any {
    return this.leadForm.get('location');
  }
  getContactNumberErrorMessage() {
    return this.contactNumber.hasError('required') ? `You must enter a value` :
        '';
  }
  get contactNumber(): any {
    return this.leadForm.get('contactNumber');
  }
  getCommentsErrorMessage() {
    return this.comments.hasError('required') ? `You must enter a value` :
        '';
  }
  get comments(): any {
    return this.leadForm.get('comments');
  }
  getEarningsDeclaredErrorMessage() {
    return this.earningsDeclared.hasError('required') ? `You must enter a value` :
        '';
  }
  get earningsDeclared(): any {
    return this.leadForm.get('earningsDeclared');
  }
  getPremiumPerMemberErrorMessage() {
    return this.premiumPerMember.hasError('required') ? `You must select a value` :
        '';
  }
  // getErrorMessage(controlName: string) {
  //   return this.formControlByName(controlName).hasError('required') ? `You must enter a value` :
  //     this.formControlByName(controlName).hasError(controlName) ? `Not a valid ${controlName}` :
  //       '';
  // }
  get premiumPerMember(): any {
    return this.leadForm.get('premiumPerMember');
  }
  getQuoteNumberErrorMessage() {
    return this.quoteNumber.hasError('required') ? `You must enter a value` :
    this.quoteNumber.hasError('quoteNumber') ? `Not a valid quote umnber` :
        '';
  }
  get quoteNumber(): any {
    return this.leadForm.get('quoteNumber');
  }
  getLandlineErrorMessage() {
    return this.landline.hasError('required') ? `You must enter a value` :
        '';
  }
  get landline(): any {
    return this.leadForm.get('landline');
  }
  getQuoteAmountErrorMessage() {
    return this.quoteAmount.hasError('required') ? `You must enter a value` :
        '';
  }
  get quoteAmount(): any {
    return this.leadForm.get('quoteAmount');
  }
  getEmailErrorMessage() {
    return this.email.hasError('required') ? `You must enter a value` :
        '';
  }
  get email(): any {
    return this.leadForm.get('email');
  }
  getMemberNameErrorMessage() {
    return this.memberName.hasError('required') ? `You must enter a value` :
        '';
  }
  get memberName(): any {
    return this.leadForm.get('memberName');
  }
  // getErrorMessage(controlName: string) {
  //   return this.leadForm.get(controlName).hasError('required') ? 'You must enter a value' :
  //     this.landline.hasError('email') ? 'Not a valid email' :
  //       '';
  // }
  // getLandlineErrorMessage() {
  //   return this.landline.hasError('required') ? 'You must enter a value' :
  //     this.landline.hasError('email') ? 'Not a valid email' :
  //       '';
  // }
  // getQuoteAmountErrorMessage() {
  //   return this.quoteAmount.hasError('required') ? 'You must enter a value' :
  //     this.quoteAmount.hasError('email') ? 'Not a valid email' :
  //       '';
  // }


  ngOnInit() {
  }

  Clear(event) {
    this.leadForm.reset({
      first: { value: 'name', disabled: true },
      memberName: "",
      memberNumber: "",
      companyRegistration: "",
      churchName: "",
      email: "",
      mobileNumber: "",
      idNumber: "",
      product: "",
      quoteDate: "",
      noOFMembers: "",
      premiumPerEmployee: "",
      clientType: "",
      noOfEmployees: "",
      premiumPerMember: "",
      earningsDeclared: "",
      comments: "",
      contactNumber: "",
      location: "",
      quoteNumber: "",
      landline: "",
      quoteAmount: ""
    });

  }

  ClientTypeChangedHandler(clientType:string)
  {
    this.lead.ClientType = clientType;
  }
  // QouteNumberChangedHandler(qouteNumber: FormControl)
  // {
  //   this.leadForm.setControl.apply(qouteNumber);
  // }
  GenerateQuote(leadModel: Lead): void {
    if (this.leadForm.valid) {
      alert(JSON.stringify(leadModel));
      // console.log(JSON.stringify(leadModel))
    }else{
      alert("The Lead form still has issues.")
    }
  }
}