import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { JobsApiService } from "./jobs-api.service";
import { Job } from "../job.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobResolverService implements Resolve<Job> {

  constructor(
    private jobApiService: JobsApiService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Job> | Promise<Job> | Job {
    const id = Number(route.paramMap.get('id'));
    return this.jobApiService.getJobById(id);
  }
}
