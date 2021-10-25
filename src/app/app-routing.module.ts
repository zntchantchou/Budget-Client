import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './homePage/homePage.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
// import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'errors', component: TestErrorsComponent },
      { path: 'friends', component: UsersListComponent },
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
