import { Component, OnInit } from '@angular/core';
import { faDiscord, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent implements OnInit {

    instagramIcon = faInstagram
    githubIcon = faGithub
    linkedInIcon = faLinkedin
    twitterIcon = faTwitter
    discordIcon = faDiscord
    emailIcon = faEnvelope

  constructor() { }

  ngOnInit(): void {
  }

}
