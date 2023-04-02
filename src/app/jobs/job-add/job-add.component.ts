import { Component, OnInit, ViewChild } from '@angular/core';
import { JobFormComponent } from "../components/job-form/job-form.component";
import { Store } from "@ngrx/store";
import { State } from "../state";
import {IJob, Job} from "../job.model";
import { createJob } from "../state/actions/jobs-actions";

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.scss']
})
export class JobAddComponent implements OnInit {
  @ViewChild(JobFormComponent, { static: true }) form: JobFormComponent | null = null;

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.form?.submit
      .subscribe((value: Omit<IJob, 'id'>) => this.onSubmit(value))
  }

  onSubmit(value: Omit<IJob, 'id'>): void {

    this.store.dispatch(createJob({ props: Job.formatToApiData(value) }))
  }
}
