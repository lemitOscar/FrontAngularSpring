import {Injectable} from '@angular/core';
import {Clientes} from "../model/clientes";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //url spring backend
  private url: string = 'http://localhost:8080/client/findAll';
  private urlCreate: string = 'http://localhost:8080/client/save';

  //mandamos cabeceras
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  //injection
  constructor(private http: HttpClient) {
  }

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.url);
  }//get all

  create(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.urlCreate, cliente, {headers: this.httpHeaders})
  }//create client
}
