import { AbstractControl, ValidationErrors } from "@angular/forms"
import { firstValueFrom } from "rxjs"
import { ApiEmailValidatorService } from "../../Servicios/api-email-validator.service";

export async function  emailValid(control: AbstractControl, emailService:ApiEmailValidatorService): Promise<ValidationErrors | null>{
    console.log("entre aquí"); 
    const value:string =control.value;
    let result=  await firstValueFrom(emailService.validEmail(value));
    console.log(result);
    return result? null :   { emailIsCorrect: "Email invalid" };
  }