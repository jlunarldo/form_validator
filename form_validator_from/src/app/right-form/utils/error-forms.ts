import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


export  function errorKeys (errors: ValidationErrors | null | undefined): string[] {
    if(errors!=null||errors!=undefined) console.log("Este mi object Keys: " ,Object.keys(errors))
    
    return errors ? Object.keys(errors) : [];
  }
  
 export function getErrorMessage(errorKey: string, errorValue: any, errorMessages:(errorValue:any)=>{[key:string]:string} ): string {
    
 
    return errorMessages(errorValue)[errorKey] || 'Unknown Error';
  }