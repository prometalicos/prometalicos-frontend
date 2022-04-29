import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsystemCreateComponent } from './subsystem-create.component';

describe('SubsystemCreateComponent', () => {
  let component: SubsystemCreateComponent;
  let fixture: ComponentFixture<SubsystemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsystemCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsystemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
