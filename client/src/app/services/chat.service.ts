import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { SocketChatService } from './socket-chat.service';

@Injectable()
export class ChatService {
  private socketService: SocketChatService;
  public lastMessage: ReplaySubject<any> = new ReplaySubject(1);

  constructor() {
    this.socketService = new SocketChatService();
  
    this.socketService.receiveMessage().subscribe(
      message => this.lastMessage.next(message),
      error => console.log(error)
    );
  }

  sendMessage(params: any) {
    this.socketService.sendMessage(params);
  }

}
