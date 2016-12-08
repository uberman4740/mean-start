declare var io: any;

import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  msgs = ['aa', 'bb'];
  socket: any;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.socket = io();
    this.socket.on('chat message', (msg: string) => {
      this.zone.run(() => {
        this.msgs.push(msg)
      });
    });
  }

  send = function (msg: string) {
    // this.msgs.push(msg);
    this.socket.emit('chat message', msg);
  };

}
