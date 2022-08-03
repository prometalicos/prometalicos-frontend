import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerifericCreateComponent } from './periferic-create.component';

describe('PerifericCreateComponent', () => {
  let component: PerifericCreateComponent;
  let fixture: ComponentFixture<PerifericCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerifericCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerifericCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
