import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { FormControl, FormGroup, Validators, NgForm } from "@angular/forms";

import { first } from "rxjs/operators";

import { Exam } from "src/app/models/Exam";

import { AuthService } from "src/app/services/auth.service";
import { ExamsService } from "src/app/services/exams.service";

@Component({
  selector: "app-create-exam",
  templateUrl: "./create-exam.component.html",
  styleUrls: ["./create-exam.component.scss"],
})
export class CreateExamComponent implements OnInit {
  @ViewChild("formDirective") formDirective: NgForm;
  @Output() create: EventEmitter<any> = new EventEmitter();

  form: FormGroup;

  isOpen = false;

  constructor(
    private authService: AuthService,
    private ExamsService: ExamsService
  ) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      title: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit(formData: Pick<Exam, "title" | "body">): void {
    this.ExamsService
      .createExam(formData, this.authService.userId)
      .pipe(first())
      .subscribe(() => {
        this.create.emit(null);
      });
    this.form.reset();
    this.formDirective.resetForm();
  }
}
