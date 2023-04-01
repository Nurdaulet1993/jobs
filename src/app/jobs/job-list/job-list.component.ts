import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "../state";
import { getJobs } from "../state/actions/jobs-actions";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  constructor(
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getJobs())
  }
}
