import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeditComponent } from './pedit.component';

describe('PeditComponent', () => {
  let component: PeditComponent;
  let fixture: ComponentFixture<PeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
