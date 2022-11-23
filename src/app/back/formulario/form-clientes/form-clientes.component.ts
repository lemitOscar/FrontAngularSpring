import {Component, OnInit} from '@angular/core';
import {Clientes} from "../../clientes/model/clientes";
import {ClienteService} from "../../clientes/service/cliente.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  public cliente: Clientes = new Clientes();

  //inyecto el servicio
  constructor(private clientService: ClienteService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public create(): void {
    this.clientService.create(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes']),
          Swal.fire({
            title: 'Guardado!',
            text: `Cliente generado ${this.cliente.name}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      }
    );
  }
}
