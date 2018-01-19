import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData = 'moi';
  mediaurl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imgUrl = '';
  mediaArray: any;
  apiUrl = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: HttpClient) { }

  /*
  getJSON() {
    this.http.get('assets/package1.json').subscribe(( data ) => {
      console.log(data);
      this.someData = data.license;
      console.log(this.someData);
    });
  }
  */

  getJSON() {
    interface MyInterface {
      license: string;
    }

    this.http.get<MyInterface>('assets/package1.json').subscribe((data) => {
      console.log(data);
      this.someData = data.license;
    });
  }


  getMedia() {
    this.http.get(this.apiUrl + '/media').subscribe(data => {
      console.log(data);
      this.mediaArray = data;
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
