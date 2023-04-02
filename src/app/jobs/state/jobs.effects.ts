import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { JobsApiService} from "../services/jobs-api.service";
import { Router } from "@angular/router";
import { JobsActions, JobsApiActions } from './actions';
import { catchError, EMPTY, map, mergeMap, tap } from "rxjs";
import { IJob } from "../job.model";

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

  updateJob$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActions.updateJob),
    mergeMap(
      ({ id, props }) => this.jobsApiService.updateJob(id, props)
        .pipe(
          map(() => ({ type: JobsApiActions.JobsApiActionsType.UPDATE_JOB_SUCCESS })),
          catchError((error) => EMPTY)
        )
    )
  ))

  updateJobSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(JobsApiActions.JobsApiActionsType.UPDATE_JOB_SUCCESS),
    tap(() => this.router.navigate(['jobs']))
  ), { dispatch: false })

  createJob$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActions.createJob),
    mergeMap(
      ({ props }) => this.jobsApiService.createJob(props)
        .pipe(
          map(() => ({ type: JobsApiActions.JobsApiActionsType.CREATE_JOB_SUCCESS })),
          catchError((error) => EMPTY)
        )
    )
  ))

  createJobSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(JobsApiActions.JobsApiActionsType.CREATE_JOB_SUCCESS),
    tap(() => this.router.navigate(['jobs']))
  ), { dispatch: false })

  constructor(
    private actions$: Actions,
    private jobsApiService: JobsApiService,
    private router: Router
  ) {}
}
