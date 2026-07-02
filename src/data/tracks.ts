export interface Track {
  name: string;
  mood: string;
  src: string;
}

const PIANO   = 'https://archive.org/download/solo-piano-7/';
const AMBIENT = 'https://archive.org/download/AmbientSoundbathPodcast/';
const FOREST  = 'https://archive.org/download/EastForest-TheEducationOfTheIndividualSoul/';
const MINDFUL = 'https://archive.org/download/audiorezout-mindfulness/';
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

  // ── Тренировка ── специализированный workout-микс (steady + high intensity)
  { name: 'Послесловие',          mood: 'Тренировка', src: WRKOUT2 + '01_-_steady_reps_-_yacht_-_the_afterlife_(instrumental).mp3' },
  { name: 'Принцесса потеряна',   mood: 'Тренировка', src: WRKOUT2 + '02_-_steady_reps_-_laguna_-_la_princesa_perdida.mp3' },
  { name: 'Блюз настроения',      mood: 'Тренировка', src: WRKOUT2 + '03_-_steady_reps_-_mr._moods_-_i_got_the_blues.mp3' },
  { name: 'Вперёд',               mood: 'Тренировка', src: WRKOUT2 + '04_-_steady_reps_-_northbound_-_forward.mp3' },
  { name: 'Держи ритм',           mood: 'Тренировка', src: WRKOUT2 + '05_-_steady_reps_-_player_two_-_keep_sit_real.mp3' },
  { name: 'Неудержимый позитив',  mood: 'Тренировка', src: WRKOUT2 + '06_-_steady_reps_-_spinnaface_-_relentless_positivity.mp3' },
  { name: 'Кег бейсбол',          mood: 'Тренировка', src: WRKOUT2 + '07_-_steady_reps_-_centz_-_keg_baseball.mp3' },
  { name: 'Ник и палка',          mood: 'Тренировка', src: WRKOUT2 + '08_-_steady_reps_-_citizen_crane_-_nick_the_stick.mp3' },
  { name: 'Танцующий тигр',       mood: 'Тренировка', src: WRKOUT2 + '09_-_steady_reps_-_damscray_-_dancing_tiger.mp3' },
  { name: 'Монго Бонго',          mood: 'Тренировка', src: WRKOUT2 + '10_-_steady_reps_-_krackatoa_-_mongo_bongo.mp3' },
  { name: 'Схема',                mood: 'Тренировка', src: WRKOUT2 + '11_-_high_intensity_reps_-_anitek_-_blueprint.mp3' },
  { name: 'Вишнёвое дерево',      mood: 'Тренировка', src: WRKOUT2 + '12_-_high_intensity_reps_-_burning_bright_-_the_cherry_tree.mp3' },
  { name: 'Скрутка и наука',      mood: 'Тренировка', src: WRKOUT2 + '13_-_high_intensity_reps_-_damscray_-_twist_and_science.mp3' },
  { name: 'Простые удовольствия', mood: 'Тренировка', src: WRKOUT2 + '14_-_high_intensity_reps_-_henry_homesweet_-_simple_pleasures.mp3' },
  { name: 'Реймонд Скотт',        mood: 'Тренировка', src: WRKOUT2 + '15_-_high_intensity_reps_-_junior85_-_raymond_scott.mp3' },
  { name: 'Идеальное завтра',     mood: 'Тренировка', src: WRKOUT2 + '16_-_high_intensity_reps_-_mokhov_-_perfect_tomorrow.mp3' },
];