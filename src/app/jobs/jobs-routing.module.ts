import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JobListComponent } from "./job-list/job-list.component";
import { JobEditComponent } from "./job-edit/job-edit.component";
import { JobAddComponent } from "./job-add/job-add.component";
import { JobResolverService } from "./services/job-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: JobListComponent
  },
  {
    path: 'new',
    component: JobAddComponent
  },
  {
    path: ':id',
    component: JobEditComponent,
    resolve: {
      job: JobResolverService
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule {
  static components = [
    JobListComponent,
    JobEditComponent,
    JobAddComponent
  ]
}
