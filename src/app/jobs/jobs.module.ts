import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from "./jobs-routing.module";
import { StoreModule } from "@ngrx/store";
import { jobsReducer } from "./state/jobs,reducer";
import { EffectsModule} from "@ngrx/effects";
import { JobsEffects } from "./state/jobs.effects";
import { ReactiveFormsModule } from "@angular/forms";
import { JobFormComponent } from './components/job-form/job-form.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    JobsRoutingModule.components,
    JobFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JobsRoutingModule,
    StoreModule.forFeature('jobs', jobsReducer),
    EffectsModule.forFeature([JobsEffects]),
    ReactiveFormsModule
  ]
})
export class JobsModule { }
