import { Component } from '@angular/core';

import { HomePage} from '../home/home';
import { MediaPage} from '../media/media';
import { CoffePotsPage} from '../coffe-pots/coffe-pots';

@Component({
  templateUrl: 'derkaffee.html'
})
export class DerkaffeePage {

  homeRoot = HomePage;
  mediaRoot = MediaPage;
  coffePotsRoot = CoffePotsPage;


  constructor() {}

}
