import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentDataDeleteComponent } from './student-data-delete/student-data-delete.component';
import { StudentDataEditComponent } from './student-data-edit/student-data-edit.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'studentDataEdit', component: StudentDataEditComponent },
  { path : 'studentDataDelete', component: StudentDataDeleteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
