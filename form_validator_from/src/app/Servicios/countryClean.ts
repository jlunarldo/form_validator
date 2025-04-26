 interface CountryData {
    country_name: string;
    dialling_code: string;
  }
  
  export interface CountriesResponse {
    [code: string]: CountryData; // code apunta a un Country data  ya ue se recibe la información de la siguiente manera: AR: { country_name: "Argentina", dialling_code: "+54" } code siendo asociado a un countryData
  }
  export interface Country{
    code:string;
    name:string;
    dial:string;

  }