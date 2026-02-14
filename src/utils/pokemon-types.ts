// Colores de fondo por tipo de Pokemon
export const typeColors: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-orange-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-300',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-amber-600',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-stone-500',
  ghost: 'bg-violet-700',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-800',
  steel: 'bg-slate-400',
  fairy: 'bg-pink-300',
};

// Colores de gradiente por tipo (para fondos de cards)
export const typeGradients: Record<string, string> = {
  normal: 'from-gray-300 to-gray-500',
  fire: 'from-orange-400 to-red-600',
  water: 'from-blue-400 to-blue-700',
  electric: 'from-yellow-300 to-amber-500',
  grass: 'from-green-400 to-emerald-600',
  ice: 'from-cyan-200 to-blue-400',
  fighting: 'from-red-500 to-red-800',
  poison: 'from-purple-400 to-purple-700',
  ground: 'from-amber-400 to-orange-700',
  flying: 'from-indigo-200 to-blue-400',
  psychic: 'from-pink-400 to-fuchsia-600',
  bug: 'from-lime-400 to-green-600',
  rock: 'from-stone-400 to-stone-700',
  ghost: 'from-violet-500 to-purple-900',
  dragon: 'from-indigo-500 to-violet-800',
  dark: 'from-gray-600 to-gray-900',
  steel: 'from-slate-300 to-slate-600',
  fairy: 'from-pink-200 to-pink-500',
};

// Colores de texto por tipo (para badges)
export const typeBadgeColors: Record<string, string> = {
  normal: 'bg-gray-400 text-gray-900',
  fire: 'bg-orange-500 text-white',
  water: 'bg-blue-500 text-white',
  electric: 'bg-yellow-400 text-gray-900',
  grass: 'bg-green-500 text-white',
  ice: 'bg-cyan-300 text-gray-900',
  fighting: 'bg-red-700 text-white',
  poison: 'bg-purple-500 text-white',
  ground: 'bg-amber-600 text-white',
  flying: 'bg-indigo-300 text-gray-900',
  psychic: 'bg-pink-500 text-white',
  bug: 'bg-lime-500 text-gray-900',
  rock: 'bg-stone-500 text-white',
  ghost: 'bg-violet-700 text-white',
  dragon: 'bg-indigo-600 text-white',
  dark: 'bg-gray-800 text-white',
  steel: 'bg-slate-400 text-gray-900',
  fairy: 'bg-pink-300 text-gray-900',
};

export function getTypeColor(type: string): string {
  return typeColors[type] || 'bg-gray-400';
}

export function getTypeGradient(type: string): string {
  return typeGradients[type] || 'from-gray-300 to-gray-500';
}

export function getTypeBadgeColor(type: string): string {
  return typeBadgeColors[type] || 'bg-gray-400 text-gray-900';
}
