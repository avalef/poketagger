import React, { useState } from 'react';

const POKEMON_BIOMES = [
  'Forest', 'Jungle', 'Volcano', 'Ocean', 'Mountain',
  'Desert', 'Tundra', 'Cave', 'Urban', 'Grassland',
  'Swamp', 'River'
];

interface TypeSelectorProps {
  onAddTag: (tag: string, type: 'biome' | 'category') => void;
}

export function TypeSelector({ onAddTag }: TypeSelectorProps) {
  const [newTag, setNewTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTag.trim()) {
      onAddTag(newTag.trim(), 'category');
      setNewTag('');
    }
  };

  return (
    <div className="w-full max-w-2xl space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add Custom Category</h3>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="Enter a new category (e.g., Mouse, Dragon)"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Select Biome</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {POKEMON_BIOMES.map((biome) => (
            <button
              key={biome}
              onClick={() => onAddTag(biome, 'biome')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-transform hover:scale-105"
              style={{
                backgroundColor: getBiomeColor(biome),
              }}
            >
              {biome}
            </button>
          ))}
        </div>
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