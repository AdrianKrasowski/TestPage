import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './content/homepage/homepage.component';
import { CoursesPageComponent } from './content/courses/courses-page/courses-page.component';
import { NotFoundComponent } from './content/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'courses', component: CoursesPageComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
