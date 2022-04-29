import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionCreateComponent } from './concession-create.component';

describe('ConcessionCreateComponent', () => {
  let component: ConcessionCreateComponent;
  let fixture: ComponentFixture<ConcessionCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
