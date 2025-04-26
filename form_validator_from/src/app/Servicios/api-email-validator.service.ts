import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { apiKeyForApiEmailValid } from './apiKeyForApi';


@Injectable({
  providedIn: 'root'
})
export class ApiEmailValidatorService {
  
  constructor(private http: HttpClient) { }
  apiKey= apiKeyForApiEmailValid;
  url:string= "https://api.apilayer.com/email_verification/{email}";
  headers = new HttpHeaders({
    'apikey': this.apiKey
  }); 
  //curl --location --request GET 'https://api.apilayer.com/email_verification/customercare@apilayer.com' \ --header 'apikey: EQ568OKhxQ5CIibZTQ26TQQDqQHxWABc'

  validEmail(email:string): Observable<boolean>{

    const urlToValid = this.url.replace("{email}", encodeURIComponent(email));
    return this.http.get<any>(urlToValid,{headers:this.headers})
            .pipe(
               map((response) => {
                  console.log(response)
                  if (response.syntax_valid &&
                      response.is_deliverable &&
                      !response.is_disabled &&
                      !response.is_disposable &&
                      !response.is_inbox_full &&
                      response.can_connect_smtp
                      ) {
                        console.log(" el servidor de correo del dominio respondió correctamente (can_connect_smtp:) ",response.can_connect_smtp)
                        console.log("El email es correcto")
                        return true;
                  } else {
                    console.log("entro al false");
                    return false;
                  }
                }),
                catchError((error) => {
                  console.error("No se pudo acceder a la URL:", error);
                  return of(false); // of(false) (un Observable que emite false).
                })
              
            )
  }
  
}
