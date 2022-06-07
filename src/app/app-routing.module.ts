import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScoreComponent } from './pages/score/score.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'score', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
