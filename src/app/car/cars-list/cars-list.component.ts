import { CarService } from './../../shared/car/car.service';
import { Car } from './../../shared/car/car.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  constructor(private service: CarService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getMovie();
  }

  populateForm(item: Car) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteMovie(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getMovie();
      });
    }
  }

}
