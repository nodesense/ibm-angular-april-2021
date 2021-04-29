import {createReducer, on} from '@ngrx/store';
import { Favorite } from 'src/app/models/favorite';
import { addFavorite, emptyFavorites, removeFavorite } from '../actions/favorite.actions';


const initialState: Favorite[] = [];

// reducer is a pure function, given same input, always producer same out
// reducer should not have aync code, no api calls, no timers
const _favoriteReducer = createReducer(
    initialState, // default state, which is empty list
    // state is factorite list array Favorite[]
    // immutablity, add the favorite to favorite list
    on(addFavorite, (state, action) =>  [...state, action.favorite ]),
    on(removeFavorite, (state, action) => state.filter (fav => fav.id != action.id)),
    on(emptyFavorites, (state) => [])
)

export function favoriteReducer(state, action) {
    return _favoriteReducer(state, action)
}