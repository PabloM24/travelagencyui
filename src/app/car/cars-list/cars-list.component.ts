import { CarService } from './../../shared/car/car.service';
import { Car } from './../../shared/car/car.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(public service: CarService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getCar();
  }

  populateForm(item: Car) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteCar(id).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getCar();
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.warning('Delete Error! ' + err.error);
      });
    }
  }

}
