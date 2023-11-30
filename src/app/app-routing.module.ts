import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { DetailComponent } from './Components/detail/detail.component';


const routes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent,
  },
  {
    path: 'test',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
