import { IJob } from "../jobs-api.service";

export interface JobsState {
  jobs: IJob[],
  loading: boolean
}
