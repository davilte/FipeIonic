import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  constructor(
    private http: HttpClient,
  ) { }

  getBrands() {
    const path = 'https://cors-anywhere.herokuapp.com/https://parallelum.com.br/fipe/api/v1/carros/marcas'
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(path, { headers, observe: 'response' })
  }

  getCarModels(codigo) {
    const path = `https://cors-anywhere.herokuapp.com/https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigo}/modelos`
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(path, { headers, observe: 'response' })
  }

  getCarYears(codigo, codigo2) {
    const path = `https://cors-anywhere.herokuapp.com/https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigo}/modelos/${codigo2}/anos`
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(path, { headers, observe: 'response' })
  }

  getCarPrice(codigo, codigo2, codigo3) {
    const path = `https://cors-anywhere.herokuapp.com/https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigo}/modelos/${codigo2}/anos/${codigo3}`
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    return this.http.get(path, { headers, observe: 'response' })
  }

}
