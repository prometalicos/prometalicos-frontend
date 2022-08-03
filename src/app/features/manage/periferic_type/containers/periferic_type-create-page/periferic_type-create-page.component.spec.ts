import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Periferic_typeCreatePageComponent } from './periferic_type-create-page.component';

describe('Periferic_typeCreatePageComponent', () => {
  let component: Periferic_typeCreatePageComponent;
  let fixture: ComponentFixture<Periferic_typeCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Periferic_typeCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Periferic_typeCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
