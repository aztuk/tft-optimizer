import { TooltipPointsComponent } from './../components/tooltip-points/tooltip-points.component';
import {Directive, ElementRef, HostListener, Input, OnDestroy, Renderer2, ViewContainerRef} from '@angular/core';
import { ComponentFactoryService } from '../services/component-factory.service';

@Directive({
  selector: '[tooltips]'
})
export class TooltipDirective implements OnDestroy {

  @Input('tooltips') entity: any;
  @Input('on-click') onClick:boolean = false;
  public component: any = TooltipPointsComponent;
  public tooltip: any;


  @HostListener('mouseup', ['$event']) onMouseClick($event: MouseEvent) {
    if(this.onClick){
      this.displayTooltip($event);
      this.position($event);
    }
}


  @HostListener('mouseenter', ['$event']) onMouseEnter($event: MouseEvent) {
    if(!this.onClick){
      this.displayTooltip($event);
    }
  }

  @HostListener('mousemove', ['$event']) onMouseMove($event: MouseEvent) {
    if(!this.onClick){
      this.position($event);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if(!this.onClick){
    if (this.tooltip !== undefined) {
      this.tooltip.destroy();
    }
    }
  }


  constructor(private cfs: ComponentFactoryService, private container: ViewContainerRef, private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnDestroy(): void {
    if (this.tooltip !== undefined) {
      this.tooltip.destroy();
    }
  }

  displayTooltip($event: MouseEvent) {

    this.tooltip = this.cfs.createComponent(this.container, this.component);
    this.tooltip.instance.entity = this.entity;

    if(this.onClick) {
      let overlay = this.renderer.createElement('div');
      this.renderer.addClass(overlay, 'overlay');
      this.renderer.appendChild(this.tooltip.location.nativeElement, overlay);
      this.renderer.listen(overlay, 'mousedown', ($e) => {
        this.tooltip.destroy();
      })
    }
    $event.stopPropagation();
  }

  position($event: MouseEvent) {
    if(!this.onClick) {
      let bottomCoord = $event.pageY - 50 + this.tooltip.location.nativeElement.offsetHeight;
      let deltaY = (bottomCoord > document.body.offsetHeight) ? bottomCoord - document.body.offsetHeight + 10 : 0;

      let rightCoord = $event.pageX - 50 + this.tooltip.location.nativeElement.offsetWidth;

      if(rightCoord >= document.body.offsetWidth) {
        this.renderer.setStyle(this.tooltip.location.nativeElement, 'right',  document.body.offsetWidth - $event.pageX + 50 + "px");
        this.renderer.setStyle(this.tooltip.location.nativeElement, 'left',"auto");
      } else {
        this.renderer.setStyle(this.tooltip.location.nativeElement, 'left', $event.pageX + 50 + "px");
        this.renderer.setStyle(this.tooltip.location.nativeElement, 'right',  "auto");

      }

      const top =  ($event.pageY - 50 - deltaY < 30) ? 30 : $event.pageY - 50 - deltaY;

      this.renderer.setStyle(this.tooltip.location.nativeElement, 'top',  top + "px");
    } else {
      this.renderer.setStyle(this.tooltip.location.nativeElement, 'right', "20px");
      this.renderer.setStyle(this.tooltip.location.nativeElement, 'bottom', "20px");
      this.renderer.setStyle(this.tooltip.location.nativeElement, 'left',"auto");
      this.renderer.setStyle(this.tooltip.location.nativeElement, 'top',"auto");
    }

    $event.stopPropagation();
  }

}
