import { Component, OnInit } from '@angular/core';
import { faAddressCard, faBriefcase, faComments, faContactCard, faCreditCard, faGraduationCap, faHome, faImage, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  homeIcon = faHome
  aboutIcon = faAddressCard
  serviceIcon = faBriefcase
  experienceIcon = faGraduationCap
  workIcon = faLayerGroup
  pricingIcon = faCreditCard
  testimonialIcon = faComments
  photographyIcon = faImage
  contactIcon = faContactCard

  constructor() { }

  ngOnInit(): void {
  }

}
