import { createAction, props } from "@ngrx/store";
import { IJob } from "../../job.model";

export enum JobsActionsType {
  GET_JOBS = '[JOBS] Get jobs',
  UPDATE_JOB = '[JOBS] Update job',
  CREATE_JOB = '[JOBS] Create a job'
}

export const getJobs = createAction(
  JobsActionsType.GET_JOBS
)

export const updateJob = createAction(
  JobsActionsType.UPDATE_JOB,
  props<{ id: number, props: Omit<IJob, 'id'>}>()
)

export const createJob = createAction(
  JobsActionsType.CREATE_JOB,
  props<{ props: Omit<IJob, 'id'> }>()
)
