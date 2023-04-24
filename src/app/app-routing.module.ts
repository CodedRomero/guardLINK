import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from 'src/pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'jobs',
    loadChildren: () =>
      import('../pages/jobs/jobs.module').then((m) => m.JobsModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../pages/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('../authpages/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'policy',
    loadChildren: () =>
      import('../pages/policy/policy.module').then((m) => m.PolicyModule),
  },
  {
    path: 'terms',
    loadChildren: () =>
      import('../pages/terms/terms.module').then((m) => m.TermsModule),
  },
  {
    path: 'apply',
    loadChildren: () =>
      import('../pages/apply/apply.module').then((m) => m.ApplyModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('../userpages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
