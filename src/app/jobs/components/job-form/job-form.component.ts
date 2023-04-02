import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IJob } from "../../job.model";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

interface IJobForm {
  job_number: FormControl<string>;
  job_title: FormControl<string>;
  job_start_date: FormControl<string>;
  job_close_date: FormControl<string>;
  experience_required: FormControl<boolean>;
  number_of_openings: FormControl<number | null>;
  job_notes: FormControl<string>;
}
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent {
  @Input() set job(value: Omit<IJob, "id"> | null) {
    if (!value) return;
    this.form.setValue(value)
  }
  @Output() submit = new EventEmitter<Omit<IJob, "id">>()

  form = this.fb.group<IJobForm>({
    job_number: this.fb.nonNullable.control('', Validators.required),
    job_title: this.fb.nonNullable.control('', Validators.required),
    job_start_date: this.fb.nonNullable.control('', Validators.required),
    job_close_date: this.fb.nonNullable.control('', Validators.required),
    experience_required: this.fb.nonNullable.control(false),
    number_of_openings: this.fb.control(null, [Validators.required]),
    job_notes: this.fb.nonNullable.control('')
  })

  constructor(
    private fb: FormBuilder
  ) {}

  onSubmit(): void {
    if (this.form.invalid) return;
    this.submit.emit(this.form.getRawValue());
  }
}
