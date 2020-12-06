import { CarReservationService } from './../../shared/carReservation/car-reservation.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-reservations',
  templateUrl: './car-reservations.component.html',
  styleUrls: ['./car-reservations.component.css']
})
export class CarReservationsComponent implements OnInit {

  today = new Date;
  days = 1;
  tomorrow = new Date(Date.now() + this.days * 24 * 60 * 60 * 1000);

  constructor(public service: CarReservationService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.today;
    this.tomorrow;
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: '',
      car: '',
      start: null,
      end: null
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
    this.service.postCarReservation(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getCarReservation();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Insert Error! ' + err.error.HttpErrorResponse);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putCarReservation(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getCarReservation();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Update Error! ' + err.error.HttpErrorResponse);
    });
  }

}
