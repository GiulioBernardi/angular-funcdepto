import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioFormEditComponent } from './funcionario-form-edit/funcionario-form-edit.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes =[
  { path:'', component: FuncionariosComponent },
  { path:'new', component: FuncionarioFormComponent },
  { path:'edit', component: FuncionarioFormEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
