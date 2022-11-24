import {Component, OnInit} from '@angular/core';
import {Cliente} from "./model/cliente";
import {ClienteService} from "./service/cliente.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  arrayClient: Cliente[] | undefined;

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


  /**
   * borrar un cliente
   */
  deleteClient(cliente: Cliente): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ml-2',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteClient((<number>cliente.id)).subscribe(response => {
          this.arrayClient = this.arrayClient?.filter(cli => cli !== cliente);
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
