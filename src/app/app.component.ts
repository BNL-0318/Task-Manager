import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  search = '';
  newdata = { name: 'tung' };
  constructor(private http: HttpClient) { }
  title = 'frond-end';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private apiServer = 'http://localhost:3000';
  ngOnInit(): void {
    this.postData(this.newdata);
  }
  getData(): void {
    const url = this.apiServer;
    this.http.get(url,  {
      params: {
        name: this.search
      },
      observe: 'response'
    }).subscribe((data: any) => console.log(data));
  }
  postData(newdata): void {
    const url = `${this.apiServer}/`;
    this.http.post(url, newdata, this.httpOptions).subscribe((data: any) => console.log(data));
  }
  searchInput(): void {
    this.getData();
    console.log(this.search);
  }
}
