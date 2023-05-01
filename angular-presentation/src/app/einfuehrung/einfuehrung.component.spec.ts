import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinfuehrungComponent } from './einfuehrung.component';

describe('EinfuehrungComponent', () => {
  let component: EinfuehrungComponent;
  let fixture: ComponentFixture<EinfuehrungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinfuehrungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinfuehrungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
