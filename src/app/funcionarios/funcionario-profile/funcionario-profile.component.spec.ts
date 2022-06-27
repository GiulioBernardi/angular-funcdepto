import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioProfileComponent } from './funcionario-profile.component';

describe('FuncionarioProfileComponent', () => {
  let component: FuncionarioProfileComponent;
  let fixture: ComponentFixture<FuncionarioProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
