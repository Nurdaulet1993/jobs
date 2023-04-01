import { createAction, props } from "@ngrx/store";

export enum JobsActionsType {
  GET_JOBS = '[JOBS] Get jobs'
}

export const getJobs = createAction(
  JobsActionsType.GET_JOBS
)
