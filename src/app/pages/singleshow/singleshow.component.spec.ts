import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleshowComponent } from './singleshow.component';

describe('SingleshowComponent', () => {
  let component: SingleshowComponent;
  let fixture: ComponentFixture<SingleshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
