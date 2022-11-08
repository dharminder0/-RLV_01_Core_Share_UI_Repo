import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cms',
    pathMatch: 'full'
  },
  { path: 'cms', loadChildren: () => import(`./components/CMS/cms.module`).then(m => m.CMSModule) },
  { path: 'patient', loadChildren: () => import(`./components/Patient/patient.module`).then(m => m.PatientModule) },
  { path: '**', redirectTo: '404' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
