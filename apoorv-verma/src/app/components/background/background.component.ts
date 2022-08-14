import { Component, OnInit } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
  Container,
} from 'tsparticles-engine';

import { loadFull } from "tsparticles";
import * as particlesData from "../../../assets/json/particles.json";

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  id = 'tsparticles';
  constructor() { }

  ngOnInit(): void {
  }

  particlesOptions = JSON.parse(JSON.stringify(particlesData));

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {

    await loadFull(engine);
  }

}
