import { ProfileComponent } from './profile/profile.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import { RoomComponent } from './room/room.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HotelComponent } from './hotel/hotel.component';
import { CarTypeComponent } from './car-type/car-type.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { CarModelComponent } from './car-model/car-model.component';
import { CarBrandComponent } from './car-brand/car-brand.component';
import { CarComponent } from './car/car.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', redirectTo: 'home/homeContent', pathMatch: 'full' },
  { path: 'profile', redirectTo: 'home/profile', pathMatch: 'full' },
  { path: 'roomType', redirectTo: 'home/roomType', pathMatch: 'full' },
  { path: 'roomReservation', redirectTo: 'home/roomReservation', pathMatch: 'full' },
  { path: 'room', redirectTo: 'home/room', pathMatch: 'full' },
  { path: 'reservation', redirectTo: 'home/reservation', pathMatch: 'full' },
  { path: 'hotel', redirectTo: 'home/hotel', pathMatch: 'full' },
  { path: 'carType', redirectTo: 'home/carType', pathMatch: 'full' },
  { path: 'carReservation', redirectTo: 'home/carReservation', pathMatch: 'full' },
  { path: 'carModel', redirectTo: 'home/carModel', pathMatch: 'full' },
  { path: 'carBrand', redirectTo: 'home/carBrand', pathMatch: 'full' },
  { path: 'car', redirectTo: 'home/car', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homeContent', component: HomeContentComponent },
  { path: 'roomType', component: RoomTypeComponent },
  { path: 'roomReservation', component: RoomReservationComponent },
  { path: 'room', component: RoomComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'carType', component: CarTypeComponent },
  { path: 'carReservation', component: CarReservationComponent },
  { path: 'carModel', component: CarModelComponent },
  { path: 'carBrand', component: CarBrandComponent },
  { path: 'car', component: CarComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'home', component: HomeComponent,
    //canActivate: [AuthGuard],
    children: [
      { path: 'homeContent', component: HomeContentComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'roomType', component: RoomTypeComponent },
      { path: 'roomReservation', component: RoomReservationComponent },
      { path: 'room', component: RoomComponent },
      { path: 'reservation', component: ReservationComponent },
      { path: 'hotel', component: HotelComponent },
      { path: 'carType', component: CarTypeComponent },
      { path: 'carReservation', component: CarReservationComponent },
      { path: 'carModel', component: CarModelComponent },
      { path: 'carBrand', component: CarBrandComponent },
      { path: 'car', component: CarComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, HomeContentComponent]
