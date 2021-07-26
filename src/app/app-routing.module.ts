import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{NavbarComponent} from './navbar/navbar.component';
import{FirstpageComponent} from './firstpage/firstpage.component';
import{MotorcyclesComponent} from './motorcycles/motorcycles.component';
import{LocateusComponent} from './locateus/locateus.component';
import{LoginComponent} from './login/login.component';
import{LoggedinComponent} from './loggedin/loggedin.component';
import{AuthGuard} from './_guards/auth.guard';
import{RidesComponent} from './rides/rides.component';
import{ApperalsComponent} from './apperals/apperals.component';
import{CartComponent} from './cart/cart.component';

const routes: Routes = [{path:'navbar',component:NavbarComponent},
{path:'',component:FirstpageComponent,pathMatch:"full"},{path:'motorcycles',component:MotorcyclesComponent},{path:'locateus',component:LocateusComponent},
{path:'login',component:LoginComponent},{path:'loggedin',component:LoggedinComponent,canActivate:[AuthGuard]},
{path:'rides',component:RidesComponent},{path:'appareal',component:ApperalsComponent},{path:'cart',component:CartComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
