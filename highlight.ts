
import { Directive,ElementRef,HostListener,Input,Renderer2} from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  @Input('appHighlight') highlightColor = '#ffffcc'; // default highlight
  private originalBackground : string | null = " ";
  constructor(private el: ElementRef, private renderer : Renderer2) 
  { 
      // I want to capture any inline background if present
      this.originalBackground = this.el.nativeElement.style.backgroundColor || ' ';
  }
    // mouse enter hover effect

    // mouse leave hover effect
      @HostListener('mouseenter') onEnter()
      {
        this.renderer.setStyle(this.el.nativeElement,'backgroundColor',this.highlightColor);
         this.renderer.setStyle(this.el.nativeElement,'boxshadow','0 6px14px rgba(0,0,0,0.08)');
         this.renderer.setStyle(this.el.nativeElement,'transform','translate(-3px)');
      }

      @HostListener('mouseleave') onLeave() {
         this.renderer.setStyle(this.el.nativeElement,'backgroundColor',this.highlightColor);
          this.renderer.removeStyle(this.el.nativeElement,'boxshadow');
          this.renderer.removeStyle(this.el.nativeElement,'transform');
            // using renderer2 avoids direct DOM manpulation
            // Hostlistener reacts to user events
      }

}