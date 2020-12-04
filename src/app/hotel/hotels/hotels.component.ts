import { HotelService } from './../../shared/hotel/hotel.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  stars = [];

  constructor(public service: HotelService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    //this.stars = Array(5).fill(0).map((x, i) => i + 1);
    this.stars = ["1", "2", "3", "4", "5"];
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {

      id: '',
      name: '',
      email: '',
      address: '',
      phone: null,
      rating: null
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
    this.service.postHotel(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getHotel();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putHotel(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getHotel();
    });
  }

}

