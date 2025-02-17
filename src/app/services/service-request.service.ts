import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { from, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { EducationSummary } from '../generated-data-api/models/EducationSummary';
import { ServiceRequestSummary } from '../generated-data-api';
import { getSummaryServiceRequest } from 'e-care-common-data-services';
import { MccServiceRequestSummary } from 'e-care-common-data-services/build/main/types/mcc-types';

@Injectable({
  providedIn: 'root'
})
export class ServiceRequestService {

  public HTTP_OPTIONS = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** GET education summaries by subject id. Will 404 if id not found */
  ogetServiceRequestSummaries (subjectId: string, careplanId: string): Observable<ServiceRequestSummary[]> {
    // const url = `${environment.mccapiUrl}${this.baseURL}?subject=${subjectId}&careplan=${careplanId}`;
    return this.http.get<ServiceRequestSummary[]>('url', this.HTTP_OPTIONS).pipe(
      tap((_) => { this.log(`fetched ServiceRequest Summaries id=${subjectId}, careplan=${careplanId}`);console.log("getServiceRequest", _);}),
      catchError(this.handleError<ServiceRequestSummary[]>(`getServiceRequestSummaries id=${subjectId}, careplan=${careplanId}`))
    );
  }


   /** GET Subject by id. Will 404 if id not found */
   getServiceRequestSummaries(id: string, careplanId: string): Observable<MccServiceRequestSummary[]> {

    console.log('getServiceRequestSummaries id = ' + id);
    console.log('getServiceRequestSummaries careplanId = ' + careplanId);
    return from(getSummaryServiceRequest(environment.sdsURL, environment.authURL, environment.sdsScope) as Promise<MccServiceRequestSummary[]>).pipe(
      tap(_ => this.log(`fetched subject id=${id}`)),
      catchError(this.handleError<MccServiceRequestSummary[]>(`getSubject id=${id}`))
    );
  }



  // getServiceRequestSummarieszz(subjectId: string, category: string): Observable<MccObservation[]> {
  //   const url = `${environment.mccapiUrl}/${this._observationByCategoryURL}?subject=${subjectId}&category=${category}`;
  //   return this.http.get<MccObservation[]>(url,this.HTTP_OPTIONS).pipe(
  //     tap((_) => { console.log(`getObservationsByCategory id=${subjectId}, careplan=${category}`); console.log("getObservationsByCategory", _); }),
  //     catchError(this.handleError<MccObservation[]>(`getObservationsByCategory id=${subjectId}, careplan=${category}`))
  //   );






  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`contact-service: ${message}`);
  }

}
