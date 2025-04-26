import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountriesResponse, Country } from './countryClean';
import { catchError, map, Observable, of } from 'rxjs';
import { apiKeyForApiNumValid } from './apiKeyForApi';

@Injectable({
  providedIn: 'root'
})
export class ApiNumValidatorService {

  constructor(private http: HttpClient) { }
  apiKey:string= apiKeyForApiNumValid;
  headers = new HttpHeaders({
    'apikey': 'EQ568OKhxQ5CIibZTQ26TQQDqQHxWABc'
  });

  private urlCountries: string = 'https://apilayer.net/api/countries';

    //curl "https://apilayer.net/api/countries?access_key=29af59afd2f00b5378b698569359fe56"

  
    getCountries(): Observable<Country[]> {
      const url = `${this.urlCountries}?access_key=${this.apiKey}`;
      console.log(url);
      return this.http.get<any>(url)
            .pipe(
              map((data: CountriesResponse) =>
                Object.entries(data).map(([code, country]) => ({
                  code,
                  name: country.country_name,
                  dial: country.dialling_code
                }))
              )
            );
              
    }



    private readonly urlValid:string='https://apilayer.net/api/validate';
    validNum(num:string): Observable<boolean>{
      const url = `https://apilayer.net/api/validate?access_key=${this.apiKey}&number=${num}`;
      console.log(url)
      return this.http.get<any>(url).pipe(
        map((response) => {
          if (typeof response.valid === 'boolean') {
            console.log("la respuesta enviada es:" , response.valid)
            return response.valid;
          } else {
            console.log("Esto no es un booleano hermano, algo hicimos mal");
            return false;
          }
        }),
        catchError((error) => {
          console.error("No se pudo acceder a la URL:", error);
          return of(false); // of(false) (un Observable que emite false).
        })
      );
    }
}  