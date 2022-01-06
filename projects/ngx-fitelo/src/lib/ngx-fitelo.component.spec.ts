import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFiteloComponent } from './ngx-fitelo.component';

describe('NgxFiteloComponent', () => {
  let component: NgxFiteloComponent;
  let fixture: ComponentFixture<NgxFiteloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFiteloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFiteloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
