import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'save',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/save.svg'));
    iconRegistry.addSvgIcon(
      'revert',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/undo-arrow.svg'));
    iconRegistry.addSvgIcon(
      'open-file',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/open-file.svg'));
  }

  ngOnInit() {
  }

}
