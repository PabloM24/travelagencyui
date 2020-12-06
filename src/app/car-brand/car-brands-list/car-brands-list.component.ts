import { CarBrandService } from './../../shared/carBrand/car-brand.service';
import { CarBrand } from './../../shared/carBrand/car-brand.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-brands-list',
  templateUrl: './car-brands-list.component.html',
  styleUrls: ['./car-brands-list.component.css']
})
export class CarBrandsListComponent implements OnInit {

  constructor(public service: CarBrandService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getCarBrand();
  }

  populateForm(item: CarBrand) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteCarBrand(id).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getCarBrand();
      }, (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.warning('Delete Error! ' + err.error.HttpErrorResponse);
      });
    }
  }

}