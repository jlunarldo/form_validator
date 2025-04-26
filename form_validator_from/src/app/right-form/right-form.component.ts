import { Component } from '@angular/core';
import { ApiNumValidatorService } from '../Servicios/api-num-validator.service';
import { Country } from '../Servicios/countryClean';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { ApiEmailValidatorService } from '../Servicios/api-email-validator.service';
import { errorKeys, getErrorMessage } from './utils/error-forms';
import { errorMessageEmail, errorMessagePhone } from './utils/error_messages';

@Component({
  selector: 'app-right-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './right-form.component.html',
  styleUrl: './right-form.component.css'
})
export class RightFormComponent   {

  constructor(public countryService:ApiNumValidatorService, private fb: FormBuilder, public emailService:ApiEmailValidatorService){}

  countryList: Country[]=[];
  formNum:FormGroup = new FormGroup({});
  dialForSend:string="Select";
  genders: string[]=["Man", "Female", "Other", "I prefer not to say it"]
  isDropdownGender:boolean=false;
  
  isDropdownOpen: boolean = false;
  phonePlaceholder = 'Enter your phone';
  ngOnInit(){
   this.formNum = this.fb.group({
      name: ['', {
            validators:[Validators.required],
             updateOn: 'blur'

      }],
      email: ['',{
        validators: [Validators.required,Validators.email],
        asyncValidators: [this.emailValid.bind(this)],
         updateOn: 'blur'
      }],
      phone: [{ value: '', disabled: true }, {
        validators: [Validators.required],
        asyncValidators: [this.numIsCorrect.bind(this)],
        updateOn: 'blur', // la validación se hace cuando el campo pierde el foco
      
      }],
      gender:['', Validators.required]
    });
  
    //this.loadCountries();
    
  }

  get name() {
  return this.formNum.get('name');
  } 

  get email() {
    return this.formNum.get('mail');
  }

  get phone() {
    return this.formNum.get('phone');
  }

  get gender() {
    return this.formNum.get('gender');
  }

  loadCountries():void{
    this.countryService.getCountries().subscribe(response=>{
      this.countryList=response;
      console.log(response)
    }) 
  } 
  
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    
  }
  
  selectCode(code: string, dial:string) {
    this.phonePlaceholder = `Enter your phone (e.g. ${code}...)`;
    this.isDropdownOpen = false;
    this.dialForSend=dial;
    this.formNum.get('phone')?.enable();
  } 

  async numIsCorrect(control: AbstractControl): Promise<ValidationErrors | null> {
    const value: string = control.value;
    let valid = /^[0-9]{10}$/.test(value);

    if (valid) {
      let result: any;
      let numeroSinPlus = this.dialForSend.substring(1);

      result = await firstValueFrom(this.countryService.validNum(numeroSinPlus + value));
      console.log("el resultado de result después de salir", result);
      result ? console.log("result es true") : console.log("result es false");

      return result ? null : { numIsCorrect: "The phone number is incorrect" };
    } else {
      return { numIsCorrect: "Phone number invalid" };
    }
  }
  selectGender(gender:string){
   
    this.formNum.get('gender')?.setValue(gender);
    this.isDropdownGender=!this.isDropdownGender;
  }

  toggleDropdownGender() {
    this.isDropdownGender=!this.isDropdownGender;
    
  }
//Funciones para Validad el Email

  async emailValid(control: AbstractControl): Promise<ValidationErrors | null>{
    console.log("entre aquí"); 
    const value:string =control.value;
    let result=  await firstValueFrom(this.emailService.validEmail(value));
    console.log(result);
    return result? null :   { emailIsCorrect: "Email invalid" };
  }
  errorMessagePhone(errorValue: any): { [key: string]: string }{
    return errorMessagePhone(errorValue);
  }

  errorMessageEmail(errorValue: any): { [key: string]: string }{
    return errorMessageEmail(errorValue);
  }
  errorKeysArray(errors: ValidationErrors | null | undefined): string[]{
    return errorKeys(errors);
  }
  showAllErrorMesagge(errorKey: string, errorValue: any | null | undefined,  errorMessagesFn: (errorValue: any) => { [key: string]: string } ): string {
    return getErrorMessage(errorKey, errorValue, errorMessagesFn);
  }
}
