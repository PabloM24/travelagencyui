import { CarModelService } from './../../shared/carModel/car-model.service';
import { CarModel } from './../../shared/carModel/car-model.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-models-list',
  templateUrl: './car-models-list.component.html',
  styleUrls: ['./car-models-list.component.css']
})
export class CarModelsListComponent implements OnInit {

  constructor(public service: CarModelService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getCarModel();
  }

  populateForm(item: CarModel) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID: string) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.service.deleteCarModel(ID).subscribe(res => {
        this.toastr.warning('Item deleted successfully.', 'Careful!');
        this.service.getCarModel();
      });
    }
  }

}
