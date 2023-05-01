import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GliederungComponent } from './gliederung.component';

describe('GliederungComponent', () => {
  let component: GliederungComponent;
  let fixture: ComponentFixture<GliederungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GliederungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GliederungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
