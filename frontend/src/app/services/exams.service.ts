import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, first } from "rxjs/operators";

import { Exam } from "../models/Exam";
import { User } from "../models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
  providedIn: "root",
})
export class ExamsService {
  private url = "http://localhost:3000/exam";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}

  fetchAll(): Observable<Exam[]> {
    return this.http
      .get<Exam[]>(this.url, { responseType: "json" })
      .pipe(
        catchError(this.errorHandlerService.handleError<Exam[]>("fetchAll", []))
      );
  }

  createExam(
    formData: Partial<Exam>,
    userId: Pick<User, "id">
  ): Observable<Exam> {
    return this.http
      .post<Exam>(
        this.url,
        { title: formData.title, body: formData.body, user: userId },
        this.httpOptions
      )
      .pipe(
        catchError(this.errorHandlerService.handleError<Exam>("createExam"))
      );
  }

  deleteExam(PostId: Pick<Exam, "id">): Observable<{}> {
    return this.http
      .delete<Exam>(`${this.url}/${PostId}`, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<Exam>("deleteExam"))
      );
  }
}
