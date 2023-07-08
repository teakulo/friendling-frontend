import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Route} from "./constants/route.enum";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [

  {
    path: Route.EMPTY,
    component: LoginComponent,
  },
  {
    path: Route.SIGNUP,
    component: SignupComponent,
  }


]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
