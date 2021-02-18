import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Photo} from '../modeles/photo';
import {Album} from '../modeles/album';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {


  private apiBaseUrl = 'https://jsonplaceholder.typicode.com/photos';
  // Http Options
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAllPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/album/' + albumId + '/photos', this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getOne(id: number): Observable<Photo> {
    return this.httpClient
      .get<Photo>(this.apiBaseUrl + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  update(photo: Photo): Observable<Photo> {
    console.log('update');
    return this.httpClient
      .put<Photo>(this.apiBaseUrl + '/' + photo.id, JSON.stringify(photo), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  delete(photo: Photo) {
    console.log('photo supprimé');
    return this.httpClient
      .delete(this.apiBaseUrl + '/' + photo.id, this.httpOptions)
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
