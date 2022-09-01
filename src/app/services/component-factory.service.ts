import {ComponentFactoryResolver, EmbeddedViewRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentFactoryService {

  constructor(private resolver: ComponentFactoryResolver) {
  }

  createComponent(container: any, type: any, appendBody = true) {
    this.clearContainer(container);
    const factory = this.resolver.resolveComponentFactory(type);
    const result = container.createComponent(factory);

    if (appendBody) {
      this.appendToBody(result);
    }

    return result;
  }

  clearContainer(container: any) {
    container.clear();
  }

  appendToBody(container: any) {
    const domElem = (container.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

}
