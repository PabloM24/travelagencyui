import { CarType } from './../../shared/carType/car-type.model';
import { CarTypeService } from './../../shared/carType/car-type.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-types-list',
  templateUrl: './car-types-list.component.html',
  styleUrls: ['./car-types-list.component.css']
})
export class CarTypesListComponent implements OnInit {

  constructor(public service: CarTypeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getCarType();
  }

  populateForm(item: CarType) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteCarType(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getCarType();
      });
    }
  }

}