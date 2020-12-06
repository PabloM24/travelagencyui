import { CarTypeService } from './../../shared/carType/car-type.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-types',
  templateUrl: './car-types.component.html',
  styleUrls: ['./car-types.component.css']
})
export class CarTypesComponent implements OnInit {

  driveOptions = [];
  categoryOptions = [];
  engineOptions = [];
  capacityOptions = [];

  constructor(public service: CarTypeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.driveOptions = ["4x2", "4x4"];
    this.categoryOptions = ["Sedan", "Hatchback", "SUV", "Pickup", "Minivan", "Sport"];
    this.engineOptions = ["Diesel", "Gas", "Electric"];
    this.capacityOptions = [2, 5, 7, 9];
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: '',
      name: '',
      drive: '',
      category: '',
      engine: '',
      capacity: null
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
    this.service.postCarType(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getCarType();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Insert Error! ' + err.error.HttpErrorResponse);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putCarType(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getCarType();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Update Error! ' + err.error.HttpErrorResponse);
    });
  }

}
