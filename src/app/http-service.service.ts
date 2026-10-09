
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  // Get JWT Authorization Header
  private getHeaders(): HttpHeaders {

    const token = localStorage.getItem('token');

    let headers = new HttpHeaders();

    if (token) {
      const jwt = token.startsWith('Bearer ')
        ? token
        : 'Bearer ' + token;

      headers = headers.set('Authorization', jwt);
    }

    return headers;
  }

  // POST API
  post(endpoint: any, bean: any, callback: any) {

    return this.httpClient.post(
      endpoint,
      bean,
      {
        headers: this.getHeaders(),
        withCredentials: true
      }
    ).subscribe(
      (data: any) => {
        callback(data);
      },
      (error: any) => {
        this.handleError(error);
      }
    );
  }

  // GET API
  get(endpoint: any, callback: any) {

    return this.httpClient.get(
      endpoint,
      {
        headers: this.getHeaders(),
        withCredentials: true
      }
    ).subscribe(
      (data: any) => {
        callback(data);
      },
      (error: any) => {
        this.handleError(error);
      }
    );
  }

  // Error Handling
  handleError(error: any): void {

    console.error('Request failed:', error);

    if (error.status === 401) {

      localStorage.clear();

      this.router.navigate(['/login'], {
        queryParams: {
          errorMessage: 'Session expired. Please login again.'
        }
      });
    }
  }

  // PDF Report
  getReport(url: string, token?: string) {

    const savedToken = token || localStorage.getItem('token');

    let headers = new HttpHeaders();

    if (savedToken) {
      const jwt = savedToken.startsWith('Bearer ')
        ? savedToken
        : 'Bearer ' + savedToken;

      headers = headers.set('Authorization', jwt);
    }

    this.httpClient.get(url, {
      headers: headers,
      responseType: 'blob',
      withCredentials: true
    }).subscribe(
      (res: Blob) => {

        console.log('Report received successfully:', res.size);

        const fileURL = URL.createObjectURL(res);
        const newWindow = window.open(fileURL);

        if (!newWindow) {
          alert('Please allow pop-ups to view the report.');
        }
      },
      (error: any) => {

        console.error('Report error:', error);

        if (error.status === 401) {
          alert('Unauthorized. Please login again.');
        } else if (error.status === 403) {
          alert('Access denied. Check your permissions.');
        } else if (error.status === 404) {
          alert('Report endpoint not found.');
        } else if (error.status === 500) {
          alert('Server error while generating the report.');
        } else {
          alert('Failed to generate report.');
        }

        this.handleError(error);
      }
    );
  }
}

