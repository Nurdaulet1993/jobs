import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IJob } from "../job.model";
import { Store } from "@ngrx/store";
import { State } from "../state";
import { updateJob } from "../state/actions/jobs-actions";
import { JobFormComponent } from "../components/job-form/job-form.component";

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {
  job: IJob | null = null;
  formData: Omit<IJob, 'id'> | null = null;

  @ViewChild(JobFormComponent, { static: true }) form: JobFormComponent | null = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.job = data['job'];

      if (!this.job) return;
      const { id, ...formFields } = this.job;
      this.formData = formFields;
    })

    this.form?.submit
      .subscribe((value: Omit<IJob, 'id'>) => this.onSubmit(value))
  }

  onSubmit(value: Omit<IJob, 'id'>): void {
    if (!this.job) return;

    this.store.dispatch(updateJob({
      id: this.job.id,
      props: value
    }))
  }
}
