import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@components/home/home.component';
import { AboutComponent } from '@components/about/about.component';
import { TechnicalComponent } from '@components/technical/technical.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { ContactComponent } from '@components/contact/contact.component';
import { BlogComponent } from '@components/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'technical',
    component: TechnicalComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
