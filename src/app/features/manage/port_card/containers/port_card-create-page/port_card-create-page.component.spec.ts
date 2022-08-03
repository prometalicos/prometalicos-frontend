import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Port_cardCreatePageComponent } from './port_card-create-page.component';

describe('Port_cardCreatePageComponent', () => {
  let component: Port_cardCreatePageComponent;
  let fixture: ComponentFixture<Port_cardCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Port_cardCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Port_cardCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
