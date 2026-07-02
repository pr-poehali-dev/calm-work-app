export interface Track {
  name: string;
  mood: string;
  src: string;
}

const PIANO = 'https://archive.org/download/solo-piano-7/';
const AMBIENT = 'https://archive.org/download/AmbientSoundbathPodcast/';
const FOREST = 'https://archive.org/download/EastForest-TheEducationOfTheIndividualSoul/';

export const TRACKS: Track[] = [

  // ── Работа ── спокойное фортепиано, помогает сосредоточиться
  { name: 'Начало', mood: 'Работа', src: PIANO + 'Torley-001-Openings.mp3' },
  { name: 'Просто так', mood: 'Работа', src: PIANO + 'Torley-007-Just-as-it-is.mp3' },
  { name: 'Фортепиано I', mood: 'Работа', src: PIANO + 'Torley-011-Le-piano.mp3' },
  { name: 'Фортепиано II', mood: 'Работа', src: PIANO + 'Torley-012-Le-piano-deux.mp3' },
  { name: 'Глубокие аккорды', mood: 'Работа', src: PIANO + 'Torley-003-Deep-chording.mp3' },
  { name: 'Мелодия памяти', mood: 'Работа', src: PIANO + 'Torley-002-Remember-melody.mp3' },
  { name: 'Взлётная полоса', mood: 'Работа', src: PIANO + 'Torley-016-Avenew.mp3' },
  { name: 'Нисходящая', mood: 'Работа', src: PIANO + 'Torley-017-Descendi.mp3' },
  { name: 'Триада', mood: 'Работа', src: PIANO + 'Torley-018-Triadine.mp3' },
  { name: 'Случайность', mood: 'Работа', src: PIANO + 'Torley-019-Happenstance.mp3' },
  { name: 'Семёрки', mood: 'Работа', src: PIANO + 'Torley-022-Sevens.mp3' },
  { name: 'Больше Моцарта', mood: 'Работа', src: PIANO + 'Torley-025-More-zart.mp3' },

  // ── Прогулка ── лёгкие природные зарисовки, ритм шага
  { name: 'Сад', mood: 'Прогулка', src: PIANO + 'Torley-009-The-garden.mp3' },
  { name: 'Скольжение', mood: 'Прогулка', src: PIANO + 'Torley-029-Glyding.mp3' },
  { name: 'Шагая', mood: 'Прогулка', src: PIANO + 'Torley-028-Striding.mp3' },
  { name: 'Дрейф взгляда', mood: 'Прогулка', src: PIANO + 'Torley-020-Gazer-drift.mp3' },
  { name: 'Смена', mood: 'Прогулка', src: PIANO + 'Torley-010-Turnabout.mp3' },
  { name: 'Космический горизонт', mood: 'Прогулка', src: PIANO + 'Torley-030-Cosmic-reach.mp3' },
  { name: 'Йоркская улица', mood: 'Прогулка', src: FOREST + '04YorkStreet.mp3' },
  { name: 'Шоссе вдоль океана', mood: 'Прогулка', src: FOREST + '06PacificCoastHighway.mp3' },
  { name: 'Простые вещи', mood: 'Прогулка', src: FOREST + '11TheSimpleThings.mp3' },
  { name: 'Выбор добра', mood: 'Прогулка', src: FOREST + '13ChooseGood.mp3' },
  { name: 'Интерлюдия I', mood: 'Прогулка', src: FOREST + '05Interlude1.mp3' },
  { name: 'Интерлюдия II', mood: 'Прогулка', src: FOREST + '12InterludeTwo.mp3' },

  // ── Медитация ── глубокие эмбиент-ванны, тишина и покой
  { name: 'Звуковая ванна I', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-001.mp3' },
  { name: 'Звуковая ванна II', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-002.mp3' },
  { name: 'Звуковая ванна III', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-003.mp3' },
  { name: 'Звуковая ванна IV', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-004.mp3' },
  { name: 'Звуковая ванна V', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-005.mp3' },
  { name: 'Звуковая ванна VI', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-006.mp3' },
  { name: 'Звуковая ванна VII', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-007.mp3' },
  { name: 'Звуковая ванна VIII', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-008.mp3' },
  { name: 'Звуковая ванна IX', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-009.mp3' },
  { name: 'Звуковая ванна X', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-010.mp3' },
  { name: 'Звуковая ванна XI', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-011.mp3' },
  { name: 'Звуковая ванна XII', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-012.mp3' },
  { name: 'Звуковая ванна XIII', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-013.mp3' },
  { name: 'Звуковая ванна XIV', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-014.mp3' },
  { name: 'Звуковая ванна XV', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-015.mp3' },

  // ── Тренировка ── более динамичные, ритмичные зарисовки
  { name: 'Выход за горизонт', mood: 'Тренировка', src: PIANO + 'Torley-026-Outermission.mp3' },
  { name: 'Разгон', mood: 'Тренировка', src: PIANO + 'Torley-006-Stage-set.mp3' },
  { name: 'Сладкий бонбон', mood: 'Тренировка', src: PIANO + 'Torley-008-Magic-bonbon.mp3' },
  { name: 'Бас-слот', mood: 'Тренировка', src: PIANO + 'Torley-005-Basslot.mp3' },
  { name: 'Гимо', mood: 'Тренировка', src: PIANO + 'Torley-021-Gymo.mp3' },
  { name: 'В движении', mood: 'Тренировка', src: FOREST + '02Run.mp3' },
  { name: 'Рубка дров', mood: 'Тренировка', src: FOREST + '03ChoppingTheWoods.mp3' },
  { name: 'Второе внимание', mood: 'Тренировка', src: FOREST + '07SecondAttention.mp3' },
  { name: 'Глубокий пруд', mood: 'Тренировка', src: FOREST + '08DeepPond.mp3' },
  { name: 'Знак воды', mood: 'Тренировка', src: FOREST + '10WaterSign.mp3' },
  { name: 'Законы', mood: 'Тренировка', src: FOREST + '0110Laws.mp3' },
  { name: 'Сатанас', mood: 'Тренировка', src: FOREST + '09Satanas.mp3' },
];
