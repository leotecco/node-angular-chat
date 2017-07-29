import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class SocketChatService {
  private url = 'http://localhost:3000/chat';
  private socket;

  constructor() {
    this.socket = io.connect(this.url);
  }

  sendMessage(params: any) {
    this.socket.emit('add message', params);
  }

  receiveMessage(): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      this.socket.on('receive message', (data) => observer.next(data));
    });
  }

}
