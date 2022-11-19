import { Component, OnInit } from '@angular/core';
import { faDiscord, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import * as Parallax from 'parallax-js';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { BusinessCardComponent } from 'src/app/business-card/business-card.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  instagramIcon = faInstagram
  githubIcon = faGithub
  linkedInIcon = faLinkedin
  twitterIcon = faTwitter
  discordIcon = faDiscord

  modalRef: MdbModalRef<BusinessCardComponent> | null = null;

  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.homeSectionBackground();
  }

  homeSectionBackground(){
    setTimeout(function () {
      var parallax = Parallax
      var scene = document.getElementById('scene');

      var parallaxInstance1 = new parallax(scene!, {
        relativeInput: false
      });
    }, 1000);
  }

  showBusinessCard(){
    this.modalRef = this.modalService.open(BusinessCardComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }

}
