import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SocketChatService } from './socket-chat.service';

@Injectable()
export class ChatService {
  private socketService: SocketChatService;

  constructor() {
    this.socketService = new SocketChatService();
  }

  sendMessage(params: any) {
    this.socketService.sendMessage(params);
  }

}
