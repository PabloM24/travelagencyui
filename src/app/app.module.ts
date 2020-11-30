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
    CarsListComponent
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
