import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionCreatePageComponent } from './concession-create-page.component';

describe('ConcessionCreatePageComponent', () => {
  let component: ConcessionCreatePageComponent;
  let fixture: ComponentFixture<ConcessionCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcessionCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcessionCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
