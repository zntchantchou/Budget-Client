import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService } from 'src/app/_services/campaign.service';
import { CampaignDetails } from 'src/app/_models/Campaign';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  constructor(private campaignService: CampaignService, private route: ActivatedRoute) { }

  campaignDetails: CampaignDetails;
  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const title = params.get("title");
    this.getCampaignDetails(title);
  }

  async getCampaignDetails(title: string) {
    this.campaignService.getUserCampaign(title)
    .subscribe(data => {
      this.campaignDetails = data;
      console.log("data", data);
    })
  }

}
