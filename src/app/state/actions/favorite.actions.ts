// actions are events
// actions shall have type, payload of any data

import {createAction, props} from '@ngrx/store';
import { Favorite } from 'src/app/models/favorite';

export const addFavoriteToBackend = createAction(
    '[Favorite] toBackend', // type
    props<{favorites: Favorite[]}>(), // payload/arguments that to be send with event
)

// actions are event
export const addFavorite = createAction(
    '[Favorite] add favorite', // type
    props<{favorite: Favorite}>(), // payload/arguments that to be send with event
)

// remove from favorite, what is needed, we need id
export const removeFavorite = createAction('[Favorite] remove favorite', 
                                            props<{id: number}>());

// empty favorite items, no arg/payload needed
export const emptyFavorites = createAction('[Favorite] empty');