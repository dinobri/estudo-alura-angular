import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  listaTranferencias: any[];

  constructor() {
    this.listaTranferencias = [];
  }

  get transferencias(): any[] {
    return this.listaTranferencias;
  }

  adicionar(transferencia: any): void {
    this.hidratar(transferencia);
    this.listaTranferencias.push(transferencia);
  }

  private hidratar(transferencia: any): void {
    transferencia.data = new Date();
  }
}
