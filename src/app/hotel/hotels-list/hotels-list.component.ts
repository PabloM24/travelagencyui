import { HotelService } from './../../shared/hotel/hotel.service';
import { Hotel } from './../../shared/hotel/hotel.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  constructor(public service: HotelService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getHotel();
  }

  populateForm(item: Hotel) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteHotel(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getHotel();
      });
    }
  }

}
