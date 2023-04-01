import { createSelector } from "@ngrx/store";
import * as AppState from '../../state/app.state';
import { JobsState } from "./jobs-state.model";

export interface State extends AppState.State {
  jobs: JobsState
}

export const selectJobsState = (state: State) => state.jobs;

export const selectJobs = createSelector(
  selectJobsState,
  (state: JobsState) => state.jobs
)

export const selectLoading = createSelector(
  selectJobsState,
  (state: JobsState) => state.loading
)

