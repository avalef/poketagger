import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { PokemonCard } from './components/PokemonCard';
import { TypeSelector } from './components/TypeSelector';
import { Pokemon } from './types';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pokemon = useQuery(api.pokemon.get) || [];
  const updateTags = useMutation(api.pokemon.updateTags);
  const currentPokemon = pokemon[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pokemon.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + pokemon.length) % pokemon.length);
  };

  const addTag = async (tag: string, type: 'biome' | 'category') => {
    if (!currentPokemon) return;
    
    const newBiomes = type === 'biome' && !currentPokemon.biomes.includes(tag)
      ? [...currentPokemon.biomes, tag]
      : currentPokemon.biomes;
      
    const newCategories = type === 'category' && !currentPokemon.categories.includes(tag)
      ? [...currentPokemon.categories, tag]
      : currentPokemon.categories;

    await updateTags({
      id: currentPokemon._id,
      biomes: newBiomes,
      categories: newCategories,
    });
  };

  if (!currentPokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Pokémon Habitat Tagger</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <PokemonCard pokemon={currentPokemon} />
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <TypeSelector onAddTag={addTag} />
          <div className="text-sm text-gray-500">
            {currentIndex + 1} of {pokemon.length}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;