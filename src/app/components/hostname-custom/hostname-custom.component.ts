import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostname-custom',
  imports: [],
  templateUrl: './hostname-custom.component.html',
  styleUrl: './hostname-custom.component.css',
  host: {
    'role': 'custom',
    '[attr.aria-label]': 'label',
    '[class.highlighted]': 'isHighlighted()',
    '[style.border-color]': 'borderColor',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(click)': 'toggleHighlight()',
    '(keydown)': 'handleKeydown($event)',
  }
})
export class HostnameCustomComponent {
  label: string = 'Custom Component';
  disabled: boolean = false;
  borderColor: string = 'blue';
  private _isHighlighted: boolean = false;

  @HostBinding('class.highlighted')
  get isHighlighted() {
    return this._isHighlighted;
  }

  @HostListener('click')
  toggleHighlight() {
    this._isHighlighted = !this._isHighlighted;
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this._isHighlighted = !this._isHighlighted;
    }
  }

}


