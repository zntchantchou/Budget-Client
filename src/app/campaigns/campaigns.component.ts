import { Component, OnInit } from '@angular/core';
import { Campaign } from '../_models/Campaign';
import { CampaignService } from '../_services/campaign.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  constructor(private campaignService: CampaignService) { }
  campaigns: Campaign[];
  loading = true;
  ngOnInit(): void {
    this.campaignService.getUserCampaigns()
    .subscribe(data => {
      console.log("data", data);
      this.campaigns = data; 
    })
  }
}
