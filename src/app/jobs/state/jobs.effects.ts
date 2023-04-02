import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { JobsApiService} from "../services/jobs-api.service";
import { Router } from "@angular/router";
import { JobsActions, JobsApiActions } from './actions';
import { catchError, EMPTY, map, mergeMap, tap } from "rxjs";
import { IJob } from "../job.model";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class JobsEffects {

  getJobs$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActions.getJobs),
    mergeMap(
      () => this.jobsApiService.getJobs()
        .pipe(
          map((jobs: IJob[]) => ({ type: JobsApiActions.JobsApiActionsType.GET_JOBS_SUCCESS, jobs })),
          catchError((error) => {
            this.toastService.error('Get job error!', undefined, {
              positionClass: 'toast-top-right',
              easeTime: 500
            })
            return EMPTY;
          })
        )
    )
  ))

  updateJob$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActions.updateJob),
    mergeMap(
      ({ id, props }) => this.jobsApiService.updateJob(id, props)
        .pipe(
          map(() => ({ type: JobsApiActions.JobsApiActionsType.UPDATE_JOB_SUCCESS })),
          catchError((error) => {
            this.toastService.error('Job update error!', undefined, {
              positionClass: 'toast-top-right',
              easeTime: 500
            })
            return EMPTY;
          })
        )
    )
  ))

  updateJobSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(JobsApiActions.JobsApiActionsType.UPDATE_JOB_SUCCESS),
    tap(() => {
      this.toastService.success('Job updated successfully!', undefined, {
        positionClass: 'toast-bottom-left',
        easeTime: 500
      })
      this.router.navigate(['jobs']);
    })
  ), { dispatch: false })

  createJob$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActions.createJob),
    mergeMap(
      ({ props }) => this.jobsApiService.createJob(props)
        .pipe(
          map(() => ({ type: JobsApiActions.JobsApiActionsType.CREATE_JOB_SUCCESS })),
          catchError((error) => {
            this.toastService.error('Job creation error!', undefined, {
              positionClass: 'toast-top-right',
              easeTime: 500
            })
            return EMPTY;
          })
        )
    )
  ))

  createJobSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(JobsApiActions.JobsApiActionsType.CREATE_JOB_SUCCESS),
    tap(() => {
      this.toastService.success('Job creation successfully done!', undefined, {
        positionClass: 'toast-bottom-left',
        easeTime: 500
      })
      this.router.navigate(['jobs'])
    })
  ), { dispatch: false })

  deleteJob$ = createEffect(() => this.actions$.pipe(
    ofType(JobsActions.deleteJob),
    mergeMap(
      ({ id }) => this.jobsApiService.removeJob(id)
        .pipe(
          map((id) => ({ type: JobsApiActions.JobsApiActionsType.DELETE_JOB_SUCCESS, id })),
          catchError((error) => {
            this.toastService.error('Job deletion error!', undefined, {
              positionClass: 'toast-top-right',
              easeTime: 500
            })
            return EMPTY;
          })
        )
    )
  ))

  deleteJobSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(JobsApiActions.JobsApiActionsType.DELETE_JOB_SUCCESS),
    tap(() => {
      this.toastService.success('Job deletion successfully done!', undefined, {
        positionClass: 'toast-bottom-left',
        easeTime: 500
      })
    })
  ), { dispatch: false })

  constructor(
    private actions$: Actions,
    private jobsApiService: JobsApiService,
    private router: Router,
    private toastService: ToastrService
  ) {}
}
