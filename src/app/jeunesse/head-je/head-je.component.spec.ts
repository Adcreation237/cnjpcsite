import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadJeComponent } from './head-je.component';

describe('HeadJeComponent', () => {
  let component: HeadJeComponent;
  let fixture: ComponentFixture<HeadJeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadJeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadJeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
