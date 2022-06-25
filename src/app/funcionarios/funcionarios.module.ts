import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioFormEditComponent } from './funcionario-form-edit/funcionario-form-edit.component';



@NgModule({
  declarations: [
    FuncionariosComponent,
    FuncionarioFormComponent,
    FuncionarioFormEditComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
