import { createAction, props } from "@ngrx/store";
import { IJob } from "../../jobs-api.service";

export enum JobsApiActionsType {
  GET_JOBS_SUCCESS = '[JOBS] Get jobs success'
}

export const getJobsSuccess = createAction(
  JobsApiActionsType.GET_JOBS_SUCCESS,
  props<{ jobs: IJob[] }>()
)
