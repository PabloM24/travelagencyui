import { HomeuserService } from './../shared/homeuser/homeuser.service';
import { Homeuser } from './../shared/homeuser/homeuser.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userDetails: Homeuser;
  rol: number;
  nombre: string


  constructor(private router: Router, private userdetails: HomeuserService) { }

  ngOnInit() {
    this.userdetails.getUserDetails().subscribe((data: Homeuser) => {
      this.nombre = data.first_name;
    });
  }

  Logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
