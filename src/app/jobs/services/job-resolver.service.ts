import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { JobsApiService } from "./jobs-api.service";
import { IJob } from "../job.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JobResolverService implements Resolve<IJob> {

  constructor(
    private jobApiService: JobsApiService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IJob> | Promise<IJob> | IJob {
    const id = Number(route.paramMap.get('id'));
    return this.jobApiService.getJobById(id);
  }
}
