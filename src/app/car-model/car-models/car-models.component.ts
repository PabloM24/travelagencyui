import { CarModelService } from './../../shared/carModel/car-model.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-models',
  templateUrl: './car-models.component.html',
  styleUrls: ['./car-models.component.css']
})
export class CarModelsComponent implements OnInit {

  constructor(public service: CarModelService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: '',
      name: '',
      brand: '',
      price: null
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
    this.service.postCarModel(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getCarModel();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Insert Error! ' + err.error.HttpErrorResponse);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putCarModel(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getCarModel();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Update Error! ' + err.error.HttpErrorResponse);
    });
  }

}

