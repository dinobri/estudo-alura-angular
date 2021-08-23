import { routes } from './../app-routing.module';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir(): void {
    console.log('Solicitada nova transferência');

    const transf = new Transferencia();
    transf.valor = this.valor;
    transf.destino = this.destino;

    this.service.adicionar(transf).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  limparCampos(): void {
    this.valor = 0;
    this.destino = 0;
  }
}
