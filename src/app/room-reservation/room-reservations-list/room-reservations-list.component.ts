import { RoomReservationService } from './../../shared/roomReservation/room-reservation.service';
import { RoomReservation } from './../../shared/roomReservation/room-reservation.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room-reservations-list',
  templateUrl: './room-reservations-list.component.html',
  styleUrls: ['./room-reservations-list.component.css']
})
export class RoomReservationsListComponent implements OnInit {

  constructor(public service: RoomReservationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getRoomReservation();
  }

  populateForm(item: RoomReservation) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteRoomReservation(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getRoomReservation();
      });
    }
  }

}
