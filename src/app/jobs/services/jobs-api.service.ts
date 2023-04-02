import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IJob } from "../job.model";

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

  updateJob(id: number, props: Omit<IJob, 'id'>): Observable<IJob> {
   return this.http.put<IJob>(`${this.endpoint}/${id}`, props);
  }

  createJob(props: Omit<IJob, 'id'>): Observable<IJob> {
   return this.http.post<IJob>(this.endpoint, props);
  }
}
