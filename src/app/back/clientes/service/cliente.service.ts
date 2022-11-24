import {Injectable} from '@angular/core';
import {Cliente} from "../model/cliente";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";


/**
 * Esta clase se encarga de consumir la api con las url que expone
 */
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //url spring backend
  private urlF: string = 'http://localhost:8080/client';

  //mandamos cabeceras
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  //injection
  constructor(private http: HttpClient) {
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.urlF}/findAll`);
  }//get all

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.urlF}/save`, cliente, {headers: this.httpHeaders})
  }//create client

  getClientById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlF}/find/${id}`, {headers: this.httpHeaders});
  }//busca un cliente por ID

  updateClient(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlF}/update/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }//update un client

  deleteClient(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlF}/delete/${id}`);
  }//borrar un client
}
