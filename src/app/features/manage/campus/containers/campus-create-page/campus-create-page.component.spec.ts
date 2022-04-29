import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusCreatePageComponent } from './campus-create-page.component';

describe('CampusCreatePageComponent', () => {
  let component: CampusCreatePageComponent;
  let fixture: ComponentFixture<CampusCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
