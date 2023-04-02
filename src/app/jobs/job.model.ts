import * as moment from "moment";

export interface IJob {
  id: number;
  job_number: string | null;
  job_title: string;
  job_start_date: Date | string;
  job_close_date: Date | string;
  experience_required: boolean;
  number_of_openings: number | null;
  job_notes: string;
}

export class Job {
  public props!: IJob;

  static createJob(props: IJob): Job {
    return new Job(props);
  }

  constructor(props: IJob) {
    this.props = {
      ...props,
      job_start_date: moment(props.job_start_date).format('yyyy-MM-DD'),
      job_close_date: moment(props.job_close_date).format('yyyy-MM-DD'),
    }
  }

  get id(): number {
    return this.props.id;
  }

  static formatToApiData(value: Omit<IJob, 'id'>): Omit<IJob, 'id'> {
    return {
      ...value,
      job_start_date: moment(value.job_start_date).format('yyyy-MM-DD'),
      job_close_date: moment(value.job_close_date).format('yyyy-MM-DD'),
    }
  }
}
