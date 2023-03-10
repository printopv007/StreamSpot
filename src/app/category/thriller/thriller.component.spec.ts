import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillerComponent } from './thriller.component';

describe('ThrillerComponent', () => {
  let component: ThrillerComponent;
  let fixture: ComponentFixture<ThrillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
