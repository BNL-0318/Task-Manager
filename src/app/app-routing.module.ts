import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{path: 'user',  component: UserComponent},
{path: '',  component: UserComponent},
{path: 'lists',  component: TaskViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
