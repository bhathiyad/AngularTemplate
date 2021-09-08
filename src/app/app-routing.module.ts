import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'/login',
    pathMatch:'full'},
  {
    path:'login',
    loadChildren: () => import('./features/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'home',
    loadChildren: () => import('src/app/layouts/layouts.module').then(m=>m.LayoutsModule),
    canActivate:[AuthGuard]
  },
  {
    path:'forgotpassword',
    loadChildren: () => import('./features/forgot-password/forgot-password.module').then(m=>m.ForgotPasswordModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
