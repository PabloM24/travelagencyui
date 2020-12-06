import { CarReservationService } from './../../shared/carReservation/car-reservation.service';
import { CarReservation } from './../../shared/carReservation/car-reservation.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-car-reservations-list',
  templateUrl: './car-reservations-list.component.html',
  styleUrls: ['./car-reservations-list.component.css']
})
export class CarReservationsListComponent implements OnInit {

  constructor(public service: CarReservationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getCarReservation();
  }

  populateForm(item: CarReservation) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteCarReservation(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getCarReservation();
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.warning('Update Error! ' + err.error.HttpErrorResponse);
      });
    }
  }

}
