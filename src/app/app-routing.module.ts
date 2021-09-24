import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendDetailComponent } from './friends/friend-detail/friend-detail.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { HomeComponent } from './homePage/homePage.component';
import { ListComponent } from './list/list.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'friends', component: FriendListComponent },
      { path: 'friends/:id', component: FriendDetailComponent },
      { path: 'lists', component: ListComponent },
    ],
  },
  // important to use path match with this wildCard otherwise all routes would be matched
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
