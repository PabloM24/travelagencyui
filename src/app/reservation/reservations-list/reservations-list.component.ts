import { Reservation } from './../../shared/reservation/reservation.model';
import { ReservationService } from './../../shared/reservation/reservation.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {

  constructor(public service: ReservationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getReservation();
  }

  populateForm(item: Reservation) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteReservation(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getReservation();
      });
    }
  }

}

