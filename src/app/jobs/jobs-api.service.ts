import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IJob {
  id: number;
  job_number: string;
  job_title: string;
  job_start_date: string;
  job_close_date: string;
  experience_required: boolean;
  number_of_openings: number;
  job_notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobsApiService {
  private readonly endpoint = 'http://localhost:3000/jobs';

 constructor(
   private http: HttpClient
 ) {}

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.endpoint);
  }

  getJobById(id: number): Observable<IJob> {
   return this.http.get<IJob>(`${this.endpoint}/${id}`);
  }
}
