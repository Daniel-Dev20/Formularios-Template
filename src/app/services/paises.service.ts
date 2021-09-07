import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {


  constructor(private http:HttpClient) {

  }


  getCountries = () => {

   return  this.http.get('https://restcountries.eu/rest/v2/lang/es')
                    .pipe( map( (resp:any) => {
                        return resp.map( (country:any) => {
                          return {
                            
                            name: country.name,
                            code: country.alpha3Code
                          }
                        } )
                    }))

  }
}
