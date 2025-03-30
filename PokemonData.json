import requests
import json

base_url = 'https://pokeapi.co/api/v2/pokemon/'
total_pokemons = 151  # Adjust the number of Pokémon to scrape

def get_pokemon_data(pokemon_id):
    try:
        response = requests.get(f'{base_url}{pokemon_id}')
        pokemon = response.json()
        pokemon_data = {
            'name': pokemon['name'],
            'image': pokemon['sprites']['front_default'],
            'types': [type_info['type']['name'] for type_info in pokemon['types']]
        }
        return pokemon_data
    except Exception as e:
        print(f"Error fetching data for Pokemon ID {pokemon_id}: {e}")
        return None

def scrape_pokemons():
    pokemons = []
    for i in range(1, total_pokemons + 1):
        pokemon = get_pokemon_data(i)
        if pokemon:
            pokemons.append(pokemon)

    with open('pokemonData.json', 'w') as file:
        json.dump(pokemons, file, indent=2)
    print('Pokemon data saved to pokemonData.json')

scrape_pokemons()
