import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Port_cardCreateComponent } from './port_card-create.component';

describe('Port_cardCreateComponent', () => {
  let component: Port_cardCreateComponent;
  let fixture: ComponentFixture<Port_cardCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Port_cardCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Port_cardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
