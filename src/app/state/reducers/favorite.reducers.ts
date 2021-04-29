import {createReducer, on} from '@ngrx/store';
import { Favorite } from 'src/app/models/favorite';
import { addFavorite, emptyFavorites, removeFavorite } from '../actions/favorite.actions';


const initialState: Favorite[] = [ new Favorite(1, "Matrix") ];

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

// state is provided by store, action is provided by dispatch
// returned new state is maintained by store 
export function favoriteReducer(state, action) {
    console.log('favoriteReducer called ', state, action)
    console.log("State before ", state)
    // returned state value always kept by store as last known value
    state =  _favoriteReducer(state, action) 
    console.log("State after ", state)
    return state;
}