import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') condition: boolean = false;

  @HostListener('click') onClick(eventData:Event){
    this.condition = !this.condition;
  }
}
