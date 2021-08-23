import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'novaTransferencia', component: NovaTransferenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}