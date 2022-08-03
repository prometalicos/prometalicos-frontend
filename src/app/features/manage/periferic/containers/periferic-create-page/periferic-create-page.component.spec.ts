import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerifericCreatePageComponent } from './periferic-create-page.component';

describe('Periferic_CreatePageComponent', () => {
  let component: PerifericCreatePageComponent;
  let fixture: ComponentFixture<PerifericCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerifericCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerifericCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
