import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FuncionariosService } from './../services/funcionarios.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionariosService,
    private _snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      nome:  [null],
      idade: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.funcionarioService.salvaFuncionario(this.form.value)
    .subscribe(resultado => this.onSuccess(),
    error => this.onError());
  }

  onCancel(){
    console.log(this.form.value);
    this.location.back();
  }

  private onSuccess(){
    this._snackBar.open('Funcionario cadastrado', '', {duration: 3000})
    this.onCancel();
  }

  private onError(){
    this._snackBar.open('Erro ao salvar curso', '', {duration: 3000})
  }

}
