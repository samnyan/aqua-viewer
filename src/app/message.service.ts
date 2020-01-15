import {MessageComponent} from './message/message.component';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private messageComponent: MessageComponent) {
  }

  notice(message: string) {
    this.messageComponent.openSnackBar(message);
  }
}
