import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData = '';
  imgFolder = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imgUrl = '';
  constructor(private http: HttpClient) { }

  getJSON() {
    this.http.get('assets/package1.json').subscribe(( data ) => {
      console.log(data);
      this.someData = data.license;
      console.log(this.someData);
    });
  }

  getMedia() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((data) => {
      console.log(data);
      this.imgUrl = data[0].filename;
      console.log(this.imgUrl);
    });
  }
  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
