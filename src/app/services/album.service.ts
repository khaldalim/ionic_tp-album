import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Album} from '../modeles/album';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiBaseUrl = 'https://jsonplaceholder.typicode.com/albums';
  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(this.apiBaseUrl, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getOne(id: number): Observable<Album> {
    return this.httpClient
      .get<Album>(this.apiBaseUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  save(album: Album): Observable<Album> {
    return album.id !== null
      // create
      ? this.httpClient
        .put<Album>(this.apiBaseUrl + '/' + album.id, JSON.stringify(album), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
      // update
      : this.httpClient
        .post<Album>(this.apiBaseUrl, JSON.stringify(album), this.httpOptions)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
  }

  delete(album: Album) {
    return this.httpClient
      .delete(this.apiBaseUrl + '/' + album.id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

// Handle API errors
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
