import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Campaign } from '../_models/Campaign';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CampaignService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getUserCampaigns() {
    return this.http.get<Campaign[]>(this.baseUrl + 'campaign', httpOptions);
  }
}
