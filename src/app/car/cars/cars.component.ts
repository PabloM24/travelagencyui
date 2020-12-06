import { CarService } from './../../shared/car/car.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  availability = [];

  constructor(public service: CarService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.availability = [true, false];
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: '',
      brand: '',
      model: '',
      car_type: '',
      color: '',
      year: null,
      millage: null,
      license_plate: '',
      available: null
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.id === "" || form.value.id === null) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }

    this.resetForm(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCar(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getCar();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Insert Error! ' + err.error.HttpErrorResponse);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putCar(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getCar();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Update Error! ' + err.error.HttpErrorResponse);
    });
  }

}
