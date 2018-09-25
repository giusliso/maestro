import {
  Component,
  ContentChildren,
  QueryList,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import { ResizablePanelComponent } from './resizable-panel.component';

const minWidth = 100;

@Component({
  selector: 'app-resizable-layout',
  template: '<ng-content></ng-content>'
})
export class ResizableLayoutComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(ResizablePanelComponent)
  panels: QueryList<ResizablePanelComponent>;

  ngAfterViewInit() {
    this.panels.forEach(panel =>
      panel.resizeEvent.subscribe(event => this.onResize(panel, event))
    );
  }

  ngOnDestroy() {
    this.panels.forEach(panel => panel.resizeEvent.unsubscribe());
  }

  onResize(panel: ResizablePanelComponent, event: ResizeEvent) {
    const panelsArray = this.panels.toArray();
    const currentindex = panelsArray.findIndex(item => item === panel);
    const currentWidth = panel.getRectangle().width;
    if (event.edges.right) {
      // this is panel in the left
      if (currentindex < panelsArray.length - 1) {
        const rightPanel = panelsArray[currentindex + 1];
        const rightWidth = rightPanel.getRectangle().width;
        const eventWidth = Number(event.edges.right);
        if (
          rightWidth - eventWidth >= minWidth &&
          currentWidth + eventWidth >= minWidth
        ) {
          panel.applyStyle(event.rectangle.left, event.rectangle.width);
          rightPanel.applyStyle(
            event.rectangle.left + event.rectangle.width,
            rightWidth - eventWidth
          );
        }
      } else {
        panel.applyStyle(event.rectangle.left, event.rectangle.width);
      }
    }
    if (event.edges.left) {
      // this is panel in the right
      if (currentindex > 0) {
        const leftPanel = panelsArray[currentindex - 1];
        const leftWidth = leftPanel.getRectangle().width;
        const eventWidth = Number(event.edges.left);
        if (
          leftWidth + eventWidth >= minWidth &&
          currentWidth - eventWidth >= minWidth
        ) {
          panel.applyStyle(event.rectangle.left, event.rectangle.width);
          leftPanel.applyStyle(leftPanel.getRectangle().left, leftWidth);
        }
      } else {
        panel.applyStyle(event.rectangle.left, event.rectangle.width);
      }
    }
  }
}
