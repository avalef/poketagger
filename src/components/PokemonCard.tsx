import React from 'react';
import { Pokemon, Tag } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-96">
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        className="w-full h-64 object-contain mb-4"
      />
      <h2 className="text-xl font-bold text-center text-gray-900">{pokemon.name}</h2>
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {pokemon.biomes.map((biome) => (
          <span
            key={biome}
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: getBiomeColor(biome),
              color: 'white',
            }}
          >
            {biome}
          </span>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2 justify-center">
        {pokemon.categories.map((category) => (
          <span
            key={category}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

function getBiomeColor(biome: string): string {
  const colors: Record<string, string> = {
    Forest: '#2D5A27',
    Jungle: '#1B4721',
    Volcano: '#8B0000',
    Ocean: '#1E4D6B',
    Mountain: '#6B7280',
    Desert: '#C2B280',
    Tundra: '#A1C7E0',
    Cave: '#4A4A4A',
    Urban: '#718096',
    Grassland: '#4A9C2D',
    Swamp: '#2F4F4F',
    River: '#4682B4'
  };
  return colors[biome] || '#777777';
}