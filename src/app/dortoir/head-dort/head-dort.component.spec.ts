import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDortComponent } from './head-dort.component';

describe('HeadDortComponent', () => {
  let component: HeadDortComponent;
  let fixture: ComponentFixture<HeadDortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadDortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadDortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
