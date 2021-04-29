import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Favorite } from 'src/app/models/favorite';
import { emptyFavorites, removeFavorite } from 'src/app/state/actions/favorite.actions';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {

  favorites$: Observable<Favorite[]>;

  constructor(private store: Store<{favorites: Favorite[]}> ) { 
    // fetch the data from store using selector
    // whenever data updated, latest version of data always given
    this.favorites$ = this.store.select('favorites')
  }

  ngOnInit(): void {
  }

  empty(){
    const action = emptyFavorites();
    console.log("dispatching ", action)
    this.store.dispatch(action)
  }

  remove(id: number){
    const action = removeFavorite({id: id})
    console.log("Dispatching ", action)
    this.store.dispatch(action)
  }

}
