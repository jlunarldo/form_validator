import { AbstractControl, ValidationErrors } from "@angular/forms";
import { firstValueFrom } from "rxjs";
import { ApiNumValidatorService } from "../../Servicios/api-num-validator.service";

export async function  numIsCorrect(control: AbstractControl,dialForSend:string, countryService:ApiNumValidatorService): Promise<ValidationErrors | null> {
    const value: string = control.value;
    let valid = /^[0-9]{10}$/.test(value);

    if (valid) {
      let result: any;
      let numeroSinPlus = dialForSend.substring(1);

      result = await firstValueFrom(countryService.validNum(numeroSinPlus + value));
      console.log("el resultado de result después de salir", result);
      result ? console.log("result es true") : console.log("result es false");

      return result ? null : { numIsCorrect: "The phone number is incorrect" };
    } else {
      return { numIsCorrect: "Phone number invalid" };
    }
  }