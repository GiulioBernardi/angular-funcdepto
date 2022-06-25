import { Location } from '@angular/common';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Funcionario } from './../model/funcionario';
import { FuncionariosService } from './../services/funcionarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  funcionarios$: Observable<Funcionario[]>;
  displayedColumns = ['nome', 'idade', 'acoes'];



  constructor(
    private funcionariosService: FuncionariosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
    ) {
    // this.funcionariosService = new FuncionariosService();
    this.funcionarios$ = this.funcionariosService.listaFuncionarios().pipe(
      catchError(error => {
        this.onError('Erro ao carregar os funcionários')
        return of([])
      })
    );
  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    })
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  onDelete(id: Number){
    console.log(id)
    // this.funcionarioService.salvaFuncionario(this.form.value)
    this.funcionariosService.deletarFuncionario(id).subscribe(resultado => this.onSuccessDelete(),
      error => this.onError('Erro ao deletar'));
    window.location.reload()

  }

  private onSuccessDelete(){
    this._snackBar.open('Funcionario deletado', '', {duration: 3000})
  }

  onEdit(funcionario: Funcionario){
    console.log(history.state)
    this.router.navigate(['edit', funcionario], {relativeTo: this.route})
  }



}
