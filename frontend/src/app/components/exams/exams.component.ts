import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";

import { ExamsService } from "src/app/services/exams.service";
import { AuthService } from "src/app/services/auth.service";

import { Exam } from "src/app/models/Exam";
import { User } from "src/app/models/User";

@Component({
  selector: "app-exam",
  templateUrl: "./exams.component.html",
  styleUrls: ["./exams.component.scss"],
})
export class ExamsComponent implements OnInit {
  exams$: Observable<Exam[]>;
  userId: Pick<User, "id">;

  constructor(
    private ExamsService: ExamsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.exams$ = this.fetchAll();
    this.userId = this.authService.userId;
  }

  fetchAll(): Observable<Exam[]> {
    return this.ExamsService.fetchAll();
  }

  createExams(): void {
    this.exams$ = this.fetchAll();
  }

  delete(ExamsId: Pick<Exam, "id">): void {
    this.ExamsService
      .deleteExam(ExamsId)
      .subscribe(() => (this.exams$ = this.fetchAll()));
  }
}
