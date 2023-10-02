import { Component } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { sendMessage } from "../redux/messages.actions";

@Component({
  selector: "app-message-list",
  template: `
    <div>
      <h1>Angular App</h1>
      <h2>Mensajes Recibidos</h2>
      <ul>
        <li *ngFor="let message of messages$ | async">{{ message }}</li>
      </ul>
    </div>
    <div>
      <h2>Enviar Mensaje</h2>
      <input [(ngModel)]="newMessage" placeholder="Escribe un mensaje" />
      <button (click)="sendNewMessage()">Enviar</button>
    </div>
  `,
})
export class MessageListComponent {
  messages$: Observable<string[]>;
  newMessage = "";

  constructor(private store: Store<{ messages: string[] }>) {
    this.messages$ = store.pipe(select("messages"));
  }

  sendNewMessage() {
    if (this.newMessage.trim() !== "") {
      this.store.dispatch(sendMessage({ message: this.newMessage }));
      this.newMessage = "";
    }
  }
}
