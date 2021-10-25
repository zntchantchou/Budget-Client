import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.scss']
})
export class TestErrorsComponent implements OnInit {

  validationErrors: string[] = [];
  baseUrl = "https://localhost:5001/api/";
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {}

  get404(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(res => console.log(res), e => console.log(e));
  } 
  get400(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(res => console.log(res), e => console.log(e));
  } 
  get500(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(res => console.log(res), e => console.log(e));
  } 
  get401(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(res => console.log(res), e => console.log(e));
  } 
  get400ValidationError(){
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(res => console.log(res), e => { 
      // console.log(e)
      this.validationErrors = e;
    });
  } 
}
