import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBrandsListComponent } from './car-brands-list.component';

describe('CarBrandsListComponent', () => {
  let component: CarBrandsListComponent;
  let fixture: ComponentFixture<CarBrandsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBrandsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBrandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
