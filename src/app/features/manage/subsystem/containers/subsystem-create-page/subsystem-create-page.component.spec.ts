import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsystemCreatePageComponent } from './subsystem-create-page.component';

describe('SubsystemCreatePageComponent', () => {
  let component: SubsystemCreatePageComponent;
  let fixture: ComponentFixture<SubsystemCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsystemCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsystemCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
