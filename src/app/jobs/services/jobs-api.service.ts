import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map,  Observable } from "rxjs";
import { IJob, Job } from "../job.model";

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

  getJobById(id: number): Observable<Job> {
   return this.http.get<IJob>(`${this.endpoint}/${id}`)
     .pipe(map((value: IJob) => Job.createJob(value)))
  }

  updateJob(id: number, props: Omit<IJob, 'id'>): Observable<IJob> {
   return this.http.put<IJob>(`${this.endpoint}/${id}`, props);
  }

  createJob(props: Omit<IJob, 'id'>): Observable<IJob> {
   return this.http.post<IJob>(this.endpoint, props);
  }

  removeJob(id: number): Observable<number> {
   return this.http.delete<IJob>(`${this.endpoint}/${id}`)
     .pipe(
       map(() => id)
     )
  }
}
