import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { AuthGuard } from './auth/auth.guard';
import { HomeContentComponent } from './home-content/home-content.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { RoomComponent } from './room/room.component';
import { CarTypeComponent } from './car-type/car-type.component';
import { CarBrandComponent } from './car-brand/car-brand.component';
import { CarModelComponent } from './car-model/car-model.component';
import { CarComponent } from './car/car.component';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CarsComponent } from './car/cars/cars.component';
import { CarsListComponent } from './car/cars-list/cars-list.component';
import { CarBrandsComponent } from './car-brand/car-brands/car-brands.component';
import { CarBrandsListComponent } from './car-brand/car-brands-list/car-brands-list.component';
import { CarModelsComponent } from './car-model/car-models/car-models.component';
import { CarModelsListComponent } from './car-model/car-models-list/car-models-list.component';
import { CarReservationsComponent } from './car-reservation/car-reservations/car-reservations.component';
import { CarReservationsListComponent } from './car-reservation/car-reservations-list/car-reservations-list.component';
import { CarTypesComponent } from './car-type/car-types/car-types.component';
import { CarTypesListComponent } from './car-type/car-types-list/car-types-list.component';
import { HotelsComponent } from './hotel/hotels/hotels.component';
import { HotelsListComponent } from './hotel/hotels-list/hotels-list.component';
import { ReservationsComponent } from './reservation/reservations/reservations.component';
import { ReservationsListComponent } from './reservation/reservations-list/reservations-list.component';
import { RoomsComponent } from './room/rooms/rooms.component';
import { RoomsListComponent } from './room/rooms-list/rooms-list.component';
import { RoomReservationsComponent } from './room-reservation/room-reservations/room-reservations.component';
import { RoomReservationsListComponent } from './room-reservation/room-reservations-list/room-reservations-list.component';
import { RoomTypesListComponent } from './room-type/room-types-list/room-types-list.component';
import { RoomTypesComponent } from './room-type/room-types/room-types.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomeContentComponent,
    HotelComponent,
    RoomTypeComponent,
    RoomComponent,
    CarTypeComponent,
    CarBrandComponent,
    CarModelComponent,
    CarComponent,
    RoomReservationComponent,
    CarReservationComponent,
    ReservationComponent,
    CarsComponent,
    CarsListComponent,
    CarBrandsComponent,
    CarBrandsListComponent,
    CarModelsComponent,
    CarModelsListComponent,
    CarReservationsComponent,
    CarReservationsListComponent,
    CarTypesComponent,
    CarTypesListComponent,
    HotelsComponent,
    HotelsListComponent,
    ReservationsComponent,
    ReservationsListComponent,
    RoomsComponent,
    RoomsListComponent,
    RoomReservationsComponent,
    RoomReservationsListComponent,
    RoomTypesListComponent,
    RoomTypesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    RecaptchaModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
