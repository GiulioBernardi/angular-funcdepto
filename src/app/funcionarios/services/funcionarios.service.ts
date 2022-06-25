import { Funcionario } from './../model/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly APIURI = 'api/funcionarios';

  constructor(private httpClient: HttpClient) { }

  listaFuncionarios(){
    return this.httpClient.get<Funcionario[]>(this.APIURI).pipe(
      first(),
      delay(1000),
      tap(funcionarios => console.log(funcionarios))
    );
  }

  salvaFuncionario(funcionario: Funcionario){
    return this.httpClient.post<Funcionario>(this.APIURI, funcionario);
  }

  deletarFuncionario(id: Number){
    return this.httpClient.delete<Funcionario>(this.APIURI+ "/" + id);
  }

  editarFuncionario(funcionario: Funcionario){
    console.log("to no update em service cara")
    return this.httpClient.put<Funcionario>(this.APIURI + "/" + funcionario._id, '');
  }

}
