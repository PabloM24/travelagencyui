import { CarTypeService } from './../../shared/carType/car-type.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-car-types',
  templateUrl: './car-types.component.html',
  styleUrls: ['./car-types.component.css']
})
export class CarTypesComponent implements OnInit {

  constructor(public service: CarTypeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ID_Consecutivo: null,
      Nombre: '',
      Year: '',
      Idioma: '',
      Actores: '',
      Arch_descar: '',
      Arch_previsu: '',
      Precio: '',
      Genero: null
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (form.value.ID_Consecutivo == null) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }


    this.resetForm(form);
  }

  insertRecord(form: NgForm) {
    this.service.postCarType(form.value).subscribe(res => {
      this.toastr.success('Item created successfully.', 'Great!');
      this.resetForm(form);
      this.service.getCarType();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putCarType(form.value).subscribe(res => {
      this.toastr.info('Item updated successfully.', 'Hey!');
      this.resetForm(form);
      this.service.getCarType();
    });
  }

}
