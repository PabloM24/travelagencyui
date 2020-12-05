import { RoomService } from './../../shared/room/room.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  availability = [];

  constructor(public service: RoomService,
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
      hotel: '',
      number: null,
      room_type: '',
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
    this.service.postRoom(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getRoom();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Insert Error! ' + err.error);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putRoom(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getRoom();
    }, (err: HttpErrorResponse) => {
      console.log(err);
      this.toastr.warning('Update Error! ' + err.error);
    });
  }

}

