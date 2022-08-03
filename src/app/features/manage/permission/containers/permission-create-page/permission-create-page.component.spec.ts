import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionCreatePageComponent } from './permission-create-page.component';

describe('permissionCreatePageComponent', () => {
  let component: PermissionCreatePageComponent;
  let fixture: ComponentFixture<PermissionCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissionCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
