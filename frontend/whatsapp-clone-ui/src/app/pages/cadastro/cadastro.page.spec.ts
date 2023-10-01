import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPage } from './cadastro.page';

describe('CadastroPageComponent', () => {
  let component: CadastroPage;
  let fixture: ComponentFixture<CadastroPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroPage]
    });
    fixture = TestBed.createComponent(CadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
