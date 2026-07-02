export interface Track {
  name: string;
  mood: string;
  src: string;
}

const PIANO   = 'https://archive.org/download/solo-piano-7/';
const AMBIENT = 'https://archive.org/download/AmbientSoundbathPodcast/';
const FOREST  = 'https://archive.org/download/EastForest-TheEducationOfTheIndividualSoul/';
const MINDFUL = 'https://archive.org/download/audiorezout-mindfulness/';
const WORKOUT = 'https://archive.org/download/carlin-264-danceworkoutambient/';
const WRKOUT2 = 'https://archive.org/download/oo_feelingsuperbetterworkout/';

export const TRACKS: Track[] = [

  // ── Работа ── нежная mindfulness + мягкое фортепиано для концентрации
  { name: 'Мир на земле',       mood: 'Работа', src: MINDFUL + '01.World Peace.mp3' },
  { name: 'Высшее состояние',   mood: 'Работа', src: MINDFUL + '02.Higher State.mp3' },
  { name: 'Признаки жизни',     mood: 'Работа', src: MINDFUL + '03.Signs of Life.mp3' },
  { name: 'Тысячелетие',        mood: 'Работа', src: MINDFUL + '04.Millennium.mp3' },
  { name: 'Осознание',          mood: 'Работа', src: MINDFUL + '05.Knowing.mp3' },
  { name: 'Тихий разум',        mood: 'Работа', src: MINDFUL + '06.Quiet Mind.mp3' },
  { name: 'Древнее смирение',   mood: 'Работа', src: MINDFUL + '07.Ancient Humility.mp3' },
  { name: 'Счастливые дни',     mood: 'Работа', src: MINDFUL + '08.Blissful Days.mp3' },
  { name: 'Нежные касания',     mood: 'Работа', src: PIANO + 'Torley-007-Just-as-it-is.mp3' },
  { name: 'Фортепиано I',       mood: 'Работа', src: PIANO + 'Torley-011-Le-piano.mp3' },
  { name: 'Фортепиано II',      mood: 'Работа', src: PIANO + 'Torley-012-Le-piano-deux.mp3' },
  { name: 'Мелодия памяти',     mood: 'Работа', src: PIANO + 'Torley-002-Remember-melody.mp3' },
  { name: 'Случайность',        mood: 'Работа', src: PIANO + 'Torley-019-Happenstance.mp3' },
  { name: 'Больше Моцарта',     mood: 'Работа', src: PIANO + 'Torley-025-More-zart.mp3' },
  { name: 'Триада',             mood: 'Работа', src: PIANO + 'Torley-018-Triadine.mp3' },

  // ── Прогулка ── лёгкие природные зарисовки, ритм шага
  { name: 'Сад',                  mood: 'Прогулка', src: PIANO + 'Torley-009-The-garden.mp3' },
  { name: 'Скольжение',           mood: 'Прогулка', src: PIANO + 'Torley-029-Glyding.mp3' },
  { name: 'Шагая',                mood: 'Прогулка', src: PIANO + 'Torley-028-Striding.mp3' },
  { name: 'Дрейф взгляда',        mood: 'Прогулка', src: PIANO + 'Torley-020-Gazer-drift.mp3' },
  { name: 'Смена',                mood: 'Прогулка', src: PIANO + 'Torley-010-Turnabout.mp3' },
  { name: 'Космический горизонт', mood: 'Прогулка', src: PIANO + 'Torley-030-Cosmic-reach.mp3' },
  { name: 'Йоркская улица',       mood: 'Прогулка', src: FOREST + '04YorkStreet.mp3' },
  { name: 'Шоссе вдоль океана',   mood: 'Прогулка', src: FOREST + '06PacificCoastHighway.mp3' },
  { name: 'Простые вещи',         mood: 'Прогулка', src: FOREST + '11TheSimpleThings.mp3' },
  { name: 'Выбор добра',          mood: 'Прогулка', src: FOREST + '13ChooseGood.mp3' },
  { name: 'Интерлюдия I',         mood: 'Прогулка', src: FOREST + '05Interlude1.mp3' },
  { name: 'Интерлюдия II',        mood: 'Прогулка', src: FOREST + '12InterludeTwo.mp3' },

  // ── Медитация ── глубокие эмбиент-ванны, тишина и покой
  { name: 'Звуковая ванна I',    mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-001.mp3' },
  { name: 'Звуковая ванна II',   mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-002.mp3' },
  { name: 'Звуковая ванна III',  mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-003.mp3' },
  { name: 'Звуковая ванна IV',   mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-004.mp3' },
  { name: 'Звуковая ванна V',    mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-005.mp3' },
  { name: 'Звуковая ванна VI',   mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-006.mp3' },
  { name: 'Звуковая ванна VII',  mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-007.mp3' },
  { name: 'Звуковая ванна VIII', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-008.mp3' },
  { name: 'Звуковая ванна IX',   mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-009.mp3' },
  { name: 'Звуковая ванна X',    mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-010.mp3' },
  { name: 'Звуковая ванна XI',   mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-011.mp3' },
  { name: 'Звуковая ванна XII',  mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-012.mp3' },
  { name: 'Звуковая ванна XIII', mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-013.mp3' },
  { name: 'Звуковая ванна XIV',  mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-014.mp3' },
  { name: 'Звуковая ванна XV',   mood: 'Медитация', src: AMBIENT + 'AmbientSoundbathPodcast-015.mp3' },

  // ── Тренировка ── энергичная dance/workout музыка
  { name: 'Держись',              mood: 'Тренировка', src: WORKOUT + '01 - Steve Johnson & Chris Slack - Hold on to You.mp3' },
  { name: 'Отражение',            mood: 'Тренировка', src: WORKOUT + '02 - Steve Johnson & Chris Slack - Mirror Image.mp3' },
  { name: 'Максимизатор',         mood: 'Тренировка', src: WORKOUT + '03 - Steve Johnson & Chris Slack - Maximizer.mp3' },
  { name: 'Латинская нотка',      mood: 'Тренировка', src: WORKOUT + '04 - Gary Moberley & John Gould - Latino Spice.mp3' },
  { name: 'Ки-Уэст',              mood: 'Тренировка', src: WORKOUT + '05 - Gary Moberley & John Gould - Key West.mp3' },
  { name: 'Текко',                mood: 'Тренировка', src: WORKOUT + '06 - Gary Moberley & John Gould - Tekco.mp3' },
  { name: 'Почувствуй это',       mood: 'Тренировка', src: WORKOUT + '07 - Gary Moberley & John Gould - Feel It.mp3' },
  { name: 'Синкопатор',           mood: 'Тренировка', src: WORKOUT + '08 - Steve Johnson & Chris Slack - Syncopator.mp3' },
  { name: 'Евробэби',             mood: 'Тренировка', src: WORKOUT + '09 - Steve Johnson & Chris Slack - Eurobaby.mp3' },
  { name: 'Трип-хоп',             mood: 'Тренировка', src: WORKOUT + '10 - Steve Johnson & Chris Slack - Trip Hop.mp3' },
  { name: 'Циклотрон',            mood: 'Тренировка', src: WORKOUT + '11 - Steve Johnson & Chris Slack - Cyclotron.mp3' },
  { name: 'Химия',                mood: 'Тренировка', src: WORKOUT + '12 - Steve Johnson & Chris Slack - Chemical.mp3' },
  { name: 'В потоке',             mood: 'Тренировка', src: WRKOUT2 + '04_-_steady_reps_-_northbound_-_forward.mp3' },
  { name: 'Танцующий тигр',       mood: 'Тренировка', src: WRKOUT2 + '09_-_steady_reps_-_damscray_-_dancing_tiger.mp3' },
  { name: 'Высокая интенсивность',mood: 'Тренировка', src: WRKOUT2 + '11_-_high_intensity_reps_-_anitek_-_blueprint.mp3' },
  { name: 'Идеальное завтра',     mood: 'Тренировка', src: WRKOUT2 + '16_-_high_intensity_reps_-_mokhov_-_perfect_tomorrow.mp3' },
];
