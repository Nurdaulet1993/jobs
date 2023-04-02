import { IJob } from "../job.model";

export interface JobsState {
  jobs: IJob[],
  loading: boolean
}
