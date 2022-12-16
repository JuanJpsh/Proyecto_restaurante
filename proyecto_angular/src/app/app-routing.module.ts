import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenSessionGuard } from './guards/open-session.guard';
import { ClosedSessionGuard } from './guards/closed-session.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionsResolver } from './resolvers/permissions.resolver';

const routes: Routes = [
  {
    path: '',
    canActivate: [OpenSessionGuard],
    component: DashboardComponent,
    resolve: { permissions: PermissionsResolver },
    loadChildren: () =>
      import('./pages/admin/admin.module').then((m) => m.AdminModule),
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [ClosedSessionGuard],
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.OauthModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
