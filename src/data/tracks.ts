export interface Track {
  name: string;
  mood: string;
  src: string;
}

const SOUNDHELIX = (n: number) =>
  `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${n}.mp3`;

const MOODS = [
  'Спокойствие', 'Дождь', 'Лес', 'Океан', 'Утро',
  'Медитация', 'Ночь', 'Туман', 'Кафе', 'Поток',
];

const NAMES = [
  'Ambient', 'Deep Calm', 'Soft Focus', 'Gentle Flow', 'Quiet Mind',
  'Slow Breath', 'Warm Light', 'Still Water', 'Distant Hills', 'Open Sky',
  'Morning Dew', 'Evening Glow', 'Silent Path', 'Cloud Drift', 'Zen Garden',
  'Northern Air', 'Velvet Dusk', 'Amber Waves', 'Pale Horizon', 'Soft Rain',
];

export const TRACKS: Track[] = Array.from({ length: 50 }, (_, i) => ({
  name: `${NAMES[i % NAMES.length]} ${Math.floor(i / NAMES.length) + 1}`,
  mood: MOODS[i % MOODS.length],
  src: SOUNDHELIX((i % 16) + 1),
}));
