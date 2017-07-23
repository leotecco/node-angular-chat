import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketChatService {
  private url = 'http://localhost:3000/chat';
  private socket;

  constructor() {
    this.socket = io.connect(this.url);
  }

  sendMessage(params: any) {
    this.socket.emit('message', params);
  }

}
