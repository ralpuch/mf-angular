import { createAction, props } from "@ngrx/store";

export const sendMessage = createAction(
  "[Messages] Send Message",
  props<{ message: string }>()
);
