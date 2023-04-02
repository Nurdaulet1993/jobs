import { createReducer, on } from "@ngrx/store";
import { JobsState } from "./jobs-state.model";
import { JobsApiActions, JobsActions } from './actions';

const initialState: JobsState = {
  jobs: [],
  loading: false
}

export const jobsReducer = createReducer(
  initialState,
  on(JobsActions.getJobs, JobsActions.deleteJob, (state) => ({ ...state, loading: true })),
  on(JobsApiActions.getJobsSuccess, (state, { jobs }) => ({ ...state, jobs, loading: false })),
  on(JobsApiActions.deleteJobSuccess, (state, { id }) => {
    return {
      ...state,
      jobs: state.jobs.filter(item => item.id !== id),
      loading: false
    }
  })
)
