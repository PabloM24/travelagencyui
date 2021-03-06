import { RoomType } from './../../shared/roomType/room-type.model';
import { RoomTypeService } from './../../shared/roomType/room-type.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-room-types-list',
  templateUrl: './room-types-list.component.html',
  styleUrls: ['./room-types-list.component.css']
})
export class RoomTypesListComponent implements OnInit {

  constructor(public service: RoomTypeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getRoomType();
  }

  populateForm(item: RoomType) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteRoomType(id).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getRoomType();
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.warning('Delete Error! ' + err.error);
      });
    }
  }

}
