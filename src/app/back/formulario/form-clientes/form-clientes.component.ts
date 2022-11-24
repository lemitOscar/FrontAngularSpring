import {Component, OnInit} from '@angular/core';
import {Cliente} from "../../clientes/model/cliente";
import {ClienteService} from "../../clientes/service/cliente.service";
import {Router, ActivatedRoute} from "@angular/router";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  //cliente amarrado en el front
  public cliente: Cliente = new Cliente();

  //inyecto el servicio
  constructor(private clientService: ClienteService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cargarClient();
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

  cargarClient(): void {
    this.activateRoute.params.subscribe(params => {
      let id: number = params['id'];
      if (id) {
        this.clientService.getClientById(id).subscribe(cliente => {
            this.cliente = cliente;
          }
        )
      }
    })
  }//busca por ID


  update(): void {
    this.clientService.updateClient(this.cliente).subscribe(cliente => {
      this.router.navigate(['/clientes']),
        Swal.fire({
          title: 'Guardado!',
          text: `Cliente Actualizado ${this.cliente.name}`,
          icon: 'success',
          confirmButtonText: 'Ok'
        })
    })
  }



}
