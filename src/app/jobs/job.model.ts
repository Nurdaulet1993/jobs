export interface IJob {
  id: number;
  job_number: string;
  job_title: string;
  job_start_date: string;
  job_close_date: string;
  experience_required: boolean;
  number_of_openings: number | null;
  job_notes: string;
}
