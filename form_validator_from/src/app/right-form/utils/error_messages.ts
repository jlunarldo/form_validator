export function errorMessageEmail(errorValue: any): { [key: string]: string } {
    return {
        emailIsCorrect: errorValue,
        email: 'Enter a valid email address',
        required:'This field is required'
    };
  }


export function errorMessagePhone(errorValue: any): { [key: string]: string } {
    return {
        numIsCorrect: errorValue,
      
        required:'This field is required'
    };
  }