import { createReducer, on } from "@ngrx/store";
import { JobsState } from "./jobs-state.model";
import { JobsApiActions, JobsActions } from './actions';

const initialState: JobsState = {
  jobs: [],
  loading: false
}

export const jobsReducer = createReducer(
  initialState,
  on(JobsActions.getJobs, (state) => ({ ...state, loading: true })),
  on(JobsApiActions.getJobsSuccess, (state, { jobs }) => ({ ...state, jobs, loading: false }))
)
