import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Periferic_typeCreateComponent } from './periferic_type-create.component';

describe('Periferic_typeCreateComponent', () => {
  let component: Periferic_typeCreateComponent;
  let fixture: ComponentFixture<Periferic_typeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Periferic_typeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Periferic_typeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
