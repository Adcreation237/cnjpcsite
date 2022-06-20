import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DortoirComponent } from './dortoir.component';

describe('DortoirComponent', () => {
  let component: DortoirComponent;
  let fixture: ComponentFixture<DortoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DortoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DortoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
