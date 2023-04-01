import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { IJob, JobsApiService} from "../jobs-api.service";
import { Router } from "@angular/router";
import { JobsActions, JobsApiActions } from './actions';
import { catchError, EMPTY, map, mergeMap } from "rxjs";

@Injectable()
export class JobsEffects {

  getJobs$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActions.getJobs),
    mergeMap(
      () => this.jobsApiService.getJobs()
        .pipe(
          map((jobs: IJob[]) => ({ type: JobsApiActions.JobsApiActionsType.GET_JOBS_SUCCESS, jobs })),
          catchError((error) => EMPTY)
        )
    )
  ))

  constructor(
    private actions$: Actions,
    private jobsApiService: JobsApiService,
    private router: Router
  ) {}
}
