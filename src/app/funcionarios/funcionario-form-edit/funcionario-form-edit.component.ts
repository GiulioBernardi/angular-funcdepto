import { FuncionariosComponent } from './../funcionarios/funcionarios.component';
import { Funcionario } from './../model/funcionario';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-funcionario-form-edit',
  templateUrl: './funcionario-form-edit.component.html',
  styleUrls: ['./funcionario-form-edit.component.scss']
})
export class FuncionarioFormEditComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionariosService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      nome: this.route.snapshot.paramMap.get('nome'),
      idade: this.route.snapshot.paramMap.get('idade')

    })
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('nome'));

  }

  onSubmit(){
    this.funcionarioService.editarFuncionario(this.form.value)
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
