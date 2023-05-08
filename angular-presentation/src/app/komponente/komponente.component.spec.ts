import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenteComponent } from './komponente.component';

describe('KomponenteComponent', () => {
  let component: KomponenteComponent;
  let fixture: ComponentFixture<KomponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
