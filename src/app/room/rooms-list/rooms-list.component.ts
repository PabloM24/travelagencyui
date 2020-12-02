import { Room } from './../../shared/room/room.model';
import { RoomService } from './../../shared/room/room.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  constructor(public service: RoomService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getRoom();
  }

  populateForm(item: Room) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteRoom(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getRoom();
      });
    }
  }

}