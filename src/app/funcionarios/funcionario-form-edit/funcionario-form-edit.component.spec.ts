import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioFormEditComponent } from './funcionario-form-edit.component';

describe('FuncionarioFormEditComponent', () => {
  let component: FuncionarioFormEditComponent;
  let fixture: ComponentFixture<FuncionarioFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
