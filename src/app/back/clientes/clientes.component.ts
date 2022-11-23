import {Component, OnInit} from '@angular/core';
import {Clientes} from "./model/clientes";
import {ClienteService} from "./service/cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  arrayClient: Clientes[] | undefined;

  constructor(private clienteService: ClienteService) {

  }

  /*
  * Aplicando el concepto del observador
  * */
  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      clientes => {
        this.arrayClient = clientes
      }
    );
  }

}
