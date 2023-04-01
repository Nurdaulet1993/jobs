import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from "./jobs-routing.module";
import { StoreModule } from "@ngrx/store";
import { jobsReducer } from "./state/jobs,reducer";
import { EffectsModule} from "@ngrx/effects";
import { JobsEffects } from "./state/jobs.effects";

@NgModule({
  declarations: [
    JobsRoutingModule.components
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    StoreModule.forFeature('jobs', jobsReducer),
    EffectsModule.forFeature([JobsEffects])
  ]
})
export class JobsModule { }
