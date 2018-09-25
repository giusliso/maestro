import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-resizable-panel',
  templateUrl: './resizable-panel.component.html',
  styleUrls: ['./resizable-panel.component.scss']
})
export class ResizablePanelComponent {
  public style: object = {};
  @Input()
  resizeLeft = false;
  @Input()
  resizeRight = false;
  @Output()
  resizeEvent = new EventEmitter();
  @ViewChild('panel')
  _eref: ElementRef;

  constructor() {}

  get resizeEdges() {
    return { right: this.resizeRight, left: this.resizeLeft };
  }

  onResizeEnd(event: ResizeEvent) {
    this.resizeEvent.emit(event);
  }

  public getRectangle(): DOMRect {
    return this._eref.nativeElement.getBoundingClientRect();
  }

  public applyStyle(left: number, width: number) {
    this.style = {
      position: 'fixed',
      left: `${left}px`,
      width: `${width}px`
    };
  }
}
