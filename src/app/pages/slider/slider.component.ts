// src/app/components/slider/slider.component.ts
import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';
import { Slider } from '../../Interfaces/Sliders';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliders: Slider[] = [];

  constructor(private sliderService: SliderService) { }

  ngOnInit(): void {
    this.loadSliders();
  }

  loadSliders(): void {
    this.sliderService.getSliders().subscribe(sliders => this.sliders = sliders);
  }
}
