export interface Track {
  name: string;
  mood: string;
  src: string;
}

const PIANO = 'https://archive.org/download/solo-piano-7/';
const AMBIENT = 'https://archive.org/download/AmbientSoundbathPodcast/';
const FOREST = 'https://archive.org/download/EastForest-TheEducationOfTheIndividualSoul/';

export const TRACKS: Track[] = [
  // Фортепиано
  { name: 'Openings', mood: 'Фортепиано', src: PIANO + 'Torley-001-Openings.mp3' },
  { name: 'Remember Melody', mood: 'Фортепиано', src: PIANO + 'Torley-002-Remember-melody.mp3' },
  { name: 'Deep Chording', mood: 'Фортепиано', src: PIANO + 'Torley-003-Deep-chording.mp3' },
  { name: 'Just As It Is', mood: 'Фортепиано', src: PIANO + 'Torley-007-Just-as-it-is.mp3' },
  { name: 'The Garden', mood: 'Фортепиано', src: PIANO + 'Torley-009-The-garden.mp3' },
  { name: 'Le Piano', mood: 'Фортепиано', src: PIANO + 'Torley-011-Le-piano.mp3' },
  { name: 'Le Piano Deux', mood: 'Фортепиано', src: PIANO + 'Torley-012-Le-piano-deux.mp3' },
  { name: 'Gazer Drift', mood: 'Фортепиано', src: PIANO + 'Torley-020-Gazer-drift.mp3' },
  { name: 'Happenstance', mood: 'Фортепиано', src: PIANO + 'Torley-019-Happenstance.mp3' },
  { name: 'Cosmic Reach', mood: 'Фортепиано', src: PIANO + 'Torley-030-Cosmic-reach.mp3' },
  { name: 'Outermission', mood: 'Фортепиано', src: PIANO + 'Torley-026-Outermission.mp3' },
  { name: 'Triadine', mood: 'Фортепиано', src: PIANO + 'Torley-018-Triadine.mp3' },
  { name: 'Glyding', mood: 'Фортепиано', src: PIANO + 'Torley-029-Glyding.mp3' },
  { name: 'More Zart', mood: 'Фортепиано', src: PIANO + 'Torley-025-More-zart.mp3' },
  { name: 'Striding', mood: 'Фортепиано', src: PIANO + 'Torley-028-Striding.mp3' },
  { name: 'Sevens', mood: 'Фортепиано', src: PIANO + 'Torley-022-Sevens.mp3' },
  { name: 'Descendi', mood: 'Фортепиано', src: PIANO + 'Torley-017-Descendi.mp3' },
  { name: 'Avenew', mood: 'Фортепиано', src: PIANO + 'Torley-016-Avenew.mp3' },
  { name: 'Gymo', mood: 'Фортепиано', src: PIANO + 'Torley-021-Gymo.mp3' },
  { name: 'Turnabout', mood: 'Фортепиано', src: PIANO + 'Torley-010-Turnabout.mp3' },
  { name: 'Stage Set', mood: 'Фортепиано', src: PIANO + 'Torley-006-Stage-set.mp3' },
  { name: 'Magic Bonbon', mood: 'Фортепиано', src: PIANO + 'Torley-008-Magic-bonbon.mp3' },

  // Медитация (Ambient Soundbath)
  { name: 'Soundbath 001', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-001.mp3' },
  { name: 'Soundbath 002', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-002.mp3' },
  { name: 'Soundbath 003', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-003.mp3' },
  { name: 'Soundbath 004', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-004.mp3' },
  { name: 'Soundbath 005', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-005.mp3' },
  { name: 'Soundbath 006', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-006.mp3' },
  { name: 'Soundbath 007', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-007.mp3' },
  { name: 'Soundbath 008', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-008.mp3' },
  { name: 'Soundbath 009', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-009.mp3' },
  { name: 'Soundbath 010', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-010.mp3' },
  { name: 'Soundbath 011', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-011.mp3' },
  { name: 'Soundbath 012', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-012.mp3' },
  { name: 'Soundbath 013', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-013.mp3' },
  { name: 'Soundbath 014', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-014.mp3' },
  { name: 'Soundbath 015', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-015.mp3' },

  // Природа (East Forest — полевые записи + мелодика)
  { name: 'Laws', mood: 'Природа', src: FOREST + '0110Laws.mp3' },
  { name: 'Run', mood: 'Природа', src: FOREST + '02Run.mp3' },
  { name: 'Chopping the Woods', mood: 'Природа', src: FOREST + '03ChoppingTheWoods.mp3' },
  { name: 'York Street', mood: 'Природа', src: FOREST + '04YorkStreet.mp3' },
  { name: 'Pacific Coast Highway', mood: 'Природа', src: FOREST + '06PacificCoastHighway.mp3' },
  { name: 'Second Attention', mood: 'Природа', src: FOREST + '07SecondAttention.mp3' },
  { name: 'Deep Pond', mood: 'Природа', src: FOREST + '08DeepPond.mp3' },
  { name: 'Water Sign', mood: 'Природа', src: FOREST + '10WaterSign.mp3' },
  { name: 'The Simple Things', mood: 'Природа', src: FOREST + '11TheSimpleThings.mp3' },
  { name: 'Choose Good', mood: 'Природа', src: FOREST + '13ChooseGood.mp3' },
  { name: 'Interlude I', mood: 'Природа', src: FOREST + '05Interlude1.mp3' },
  { name: 'Interlude II', mood: 'Природа', src: FOREST + '12InterludeTwo.mp3' },
  { name: 'Satanas', mood: 'Природа', src: FOREST + '09Satanas.mp3' },
];
