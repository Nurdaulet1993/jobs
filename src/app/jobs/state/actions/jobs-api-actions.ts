import { createAction, props } from "@ngrx/store";
import { IJob } from "../../job.model";

export enum JobsApiActionsType {
  GET_JOBS_SUCCESS = '[JOBS] Get jobs success',
  UPDATE_JOB_SUCCESS = '[JOBS] Update job success',
  CREATE_JOB_SUCCESS = '[JOBS] Create a job success'
}

export const getJobsSuccess = createAction(
  JobsApiActionsType.GET_JOBS_SUCCESS,
  props<{ jobs: IJob[] }>()
)

export const updateJobSuccess = createAction(
  JobsApiActionsType.UPDATE_JOB_SUCCESS
)

export const createJobSuccess = createAction(
  JobsApiActionsType.CREATE_JOB_SUCCESS
)
