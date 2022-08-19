import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcreateComponent } from './fcreate.component';

describe('FcreateComponent', () => {
  let component: FcreateComponent;
  let fixture: ComponentFixture<FcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
