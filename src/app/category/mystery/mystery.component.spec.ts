import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryComponent } from './mystery.component';

describe('MysteryComponent', () => {
  let component: MysteryComponent;
  let fixture: ComponentFixture<MysteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysteryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
