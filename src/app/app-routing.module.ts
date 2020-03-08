import { AuthGuardService } from './core/guards/auth-guard.service';
import { WishListComponent } from './wish-list/wish-list.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'books-search',      component: BooksSearchComponent, canActivate: [AuthGuardService] },
  { path: 'wish-list',  component: WishListComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
