import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { RentalService } from './rental/shared/rental.service';
import { RentalDetailComponent } from './rental/rental-detail/rental-detail.component';
import { UppercasePipe } from './common/Pipes/uppercase.pipe';


const routes: Routes = [
{path: '', redirectTo: '/rentals', pathMatch:'full'},
{path:'rentals', component: RentalComponent,
children: [
{path:'', component: RentalListComponent},
{path:':rentalId', component: RentalDetailComponent}
]}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent,
    UppercasePipe
   
  ],
  imports: [
  RouterModule.forRoot(routes),
  RouterModule.forChild(routes),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    NgPipesModule
      ],
  providers: [RentalService],
  bootstrap: [AppComponent]
})
export class AppModule { }