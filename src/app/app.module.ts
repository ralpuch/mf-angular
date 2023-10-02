import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { MessageListComponent } from "./components/MessageListComponent";
import { FormsModule } from "@angular/forms";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { messagesReducer } from "./redux/messages.reducer";

@NgModule({
  declarations: [AppComponent, MessageListComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ messages: messagesReducer }),
    FormsModule,
    StoreDevtoolsModule.instrument({
      name: "NgRx Demo App",
      logOnly: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
