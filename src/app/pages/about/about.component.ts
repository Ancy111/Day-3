import { Component } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { NavbarComponent } from "../../ui/navbar/navbar.component";

@Component({
  selector: 'app-about',
  imports: [CarouselComponent, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
