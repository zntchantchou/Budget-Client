import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendDetailComponent } from './friends/friend-detail/friend-detail.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { HomeComponent } from './homePage/homePage.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [
  { path: '', component: TestErrorsComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'friends', component: FriendListComponent },
      { path: 'friends/:id', component: FriendDetailComponent },
      { path: 'lists', component: ListComponent },
      { path: 'errors', component: TestErrorsComponent },
    ],
  },
  // important to use path match with this wildCard otherwise all routes would be matched
  { path: 'not-found', component: NotFoundComponent  },
  { path: 'server-error', component: ServerErrorComponent  },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
