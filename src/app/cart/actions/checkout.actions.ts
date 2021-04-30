// checkout.actions.ts
import {createAction, props} from '@ngrx/store';
import { Order } from '../models/order';


// actions are event
export const checkout = createAction(
    '[Cart] checkout', // type
    props<{order: Order}>(), // payload/arguments that to be send with event
)