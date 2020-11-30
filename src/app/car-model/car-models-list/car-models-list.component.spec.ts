import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarModelsListComponent } from './car-models-list.component';

describe('CarModelsListComponent', () => {
  let component: CarModelsListComponent;
  let fixture: ComponentFixture<CarModelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarModelsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarModelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
