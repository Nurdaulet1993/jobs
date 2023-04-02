import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { selectJobs, State } from "../state";
import { deleteJob, getJobs } from "../state/actions/jobs-actions";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs$ = this.store.select(selectJobs);

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getJobs())
  }

  onDelete(id: number): void {
    this.store.dispatch(deleteJob({ id }));
  }
}
