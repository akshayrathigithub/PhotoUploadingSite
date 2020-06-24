import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'upload-photo', component: PhotoUploadComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
