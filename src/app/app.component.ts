import { Component,OnInit } from '@angular/core';
import { pokemon} from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList: pokemon[] = POKEMONS;
  pokemonSelected: pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList);

  }

  selectPokemon(pokemonId: string){
    const pokemon: pokemon|undefined = this.pokemonList.find(pokemon=> pokemon.id == +pokemon);
    if(pokemon){
console.log(`vous avez demendé le pokemon ${pokemon.name}`);
this.pokemonSelected = pokemon ;
    }
    else{

      console.log(`vous avez démandé un pokémon qui n'existe pas.`);
      this.pokemonSelected = pokemon;
    }
    

  }
}
