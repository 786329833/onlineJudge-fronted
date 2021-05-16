import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProblemDataComponent } from './main/components/problem-data/problem-data.component';
import { RootComponent } from './main/components/root/root.component';


const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'problem/:problemId', component: ProblemDataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
