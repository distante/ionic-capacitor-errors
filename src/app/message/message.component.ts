import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../services/data.service';

let instances = 1;
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;
  public readonly id = `id-${instances}`;

  popoverOpened = false;

  constructor() {
    instances++;
  }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
