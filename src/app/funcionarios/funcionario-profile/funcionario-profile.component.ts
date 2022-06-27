import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-profile',
  templateUrl: './funcionario-profile.component.html',
  styleUrls: ['./funcionario-profile.component.scss']
})
export class FuncionarioProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const banana = [
      { tipo: 'Nanica', quantidade: 1 },
      { tipo: 'Maçã',  quantidade: 2 },
      { tipo: 'Da terra', quantidade: 3 }
  ];
  }

}
