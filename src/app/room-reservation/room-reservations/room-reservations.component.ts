import { RoomReservationService } from './../../shared/roomReservation/room-reservation.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-room-reservations',
  templateUrl: './room-reservations.component.html',
  styleUrls: ['./room-reservations.component.css']
})
export class RoomReservationsComponent implements OnInit {

  today = new Date;
  days = 1;
  tomorrow = new Date(Date.now() + this.days * 24 * 60 * 60 * 1000);

  constructor(public service: RoomReservationService,
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
      room: '',
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
    this.service.postRoomReservation(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getRoomReservation();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Insert Error! ' + err.error.HttpErrorResponse);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putRoomReservation(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getRoomReservation();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Update Error! ' + err.error.HttpErrorResponse);
    });
  }

}
