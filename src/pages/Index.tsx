import { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';

const QUOTES = [
  { text: 'Секрет продуктивности — в умении сосредоточиться на одном деле.', author: 'Тим Феррис' },
  { text: 'Дорогу осилит идущий.', author: 'Древняя мудрость' },
  { text: 'Единственный способ делать великие дела — любить то, что ты делаешь.', author: 'Стив Джобс' },
  { text: 'Не важно, как медленно ты идёшь, главное — не останавливаться.', author: 'Конфуций' },
  { text: 'Успех — это сумма небольших усилий, повторяемых изо дня в день.', author: 'Роберт Кольер' },
  { text: 'Начни делать то, что необходимо; потом то, что возможно; и вдруг ты делаешь невозможное.', author: 'Франциск Ассизский' },
  { text: 'Спокойствие — это высшая форма контроля над собой.', author: 'Марк Аврелий' },
  { text: 'Качество — это не действие, это привычка.', author: 'Аристотель' },
  { text: 'Тот, кто хочет — ищет возможности, кто не хочет — ищет причины.', author: 'Сократ' },
  { text: 'Будущее зависит от того, что ты делаешь сегодня.', author: 'Махатма Ганди' },
];

const TRACKS = [
  { name: 'Rain & Focus', src: 'https://cdn.pixabay.com/audio/2022/03/10/audio_2c8d4e3b1f.mp3' },
  { name: 'Deep Calm', src: 'https://cdn.pixabay.com/audio/2021/11/25/audio_00fa5593f3.mp3' },
];

const Index = () => {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [quoteKey, setQuoteKey] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [minutes, setMinutes] = useState(25);
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  const newQuote = () => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
    setQuoteKey((k) => k + 1);
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        toast('Не удалось запустить трек. Проверьте соединение.');
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  const finishTimer = useCallback(() => {
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    toast('Время вышло! Сделайте небольшой перерыв.', { icon: '🌿' });
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      new Notification('Сессия завершена', { body: 'Отличная работа. Пора отдохнуть.' });
    }
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            finishTimer();
            return 0;
          }
          return r - 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, finishTimer]);

  const startTimer = () => {
    if (running) {
      setRunning(false);
      return;
    }
    if (remaining === 0) setRemaining(minutes * 60);
    if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
      Notification.requestPermission();
    }
    setRunning(true);
  };

  const resetTimer = () => {
    setRunning(false);
    setRemaining(minutes * 60);
  };

  const changeMinutes = (delta: number) => {
    const next = Math.min(120, Math.max(5, minutes + delta));
    setMinutes(next);
    if (!running) setRemaining(next * 60);
  };

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');
  const progress = minutes > 0 ? 1 - remaining / (minutes * 60) : 0;

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <audio ref={audioRef} src={TRACKS[0].src} loop preload="none" />

      <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl breathe" />
      <div className="pointer-events-none absolute -bottom-40 -right-24 w-[32rem] h-[32rem] rounded-full bg-accent/40 blur-3xl breathe" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <Icon name="Leaf" className="text-primary" size={22} />
            <span className="font-display text-2xl font-semibold tracking-tight">Focus</span>
          </div>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
            <a className="hover:text-foreground transition-colors" href="#player">Музыка</a>
            <a className="hover:text-foreground transition-colors" href="#timer">Таймер</a>
          </nav>
        </header>

        <section className="text-center max-w-3xl mx-auto mb-20">
          <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mb-8">Мысль дня</p>
          <blockquote key={quoteKey} className="animate-fade-in">
            <p className="font-display text-4xl sm:text-5xl leading-tight italic text-foreground mb-6">
              «{quote.text}»
            </p>
            <footer className="text-muted-foreground text-lg">— {quote.author}</footer>
          </blockquote>
          <button
            onClick={newQuote}
            className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:opacity-70 transition-opacity"
          >
            <Icon name="RefreshCw" size={15} />
            Другая цитата
          </button>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          <div id="player" className="rounded-3xl bg-card border border-border p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Music" className="text-primary" size={20} />
              <h2 className="font-display text-2xl font-semibold">Фоновая музыка</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-8">
              Спокойный эмбиент для глубокой концентрации без отвлечений.
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              >
                <Icon name={isPlaying ? 'Pause' : 'Play'} size={26} />
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <Icon name="Volume2" size={16} />
                  Громкость
                </div>
                <Slider value={[volume]} onValueChange={(v) => setVolume(v[0])} max={100} step={1} />
              </div>
            </div>
          </div>

          <div id="timer" className="rounded-3xl bg-card border border-border p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Timer" className="text-primary" size={20} />
              <h2 className="font-display text-2xl font-semibold">Таймер фокуса</h2>
            </div>

            <div className="flex items-center justify-center gap-6 mb-6">
              <button
                onClick={() => changeMinutes(-5)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Icon name="Minus" size={18} />
              </button>
              <div className="text-center">
                <div className="font-display text-6xl font-semibold tabular-nums">{mm}:{ss}</div>
                <div className="text-xs text-muted-foreground mt-1">шаг 5 минут</div>
              </div>
              <button
                onClick={() => changeMinutes(5)}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Icon name="Plus" size={18} />
              </button>
            </div>

            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden mb-8">
              <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${progress * 100}%` }} />
            </div>

            <div className="flex gap-3">
              <button
                onClick={startTimer}
                className="flex-1 h-12 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Icon name={running ? 'Pause' : 'Play'} size={18} />
                {running ? 'Пауза' : 'Начать'}
              </button>
              <button
                onClick={resetTimer}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Icon name="RotateCcw" size={18} />
              </button>
            </div>
          </div>
        </div>

        <footer className="text-center text-sm text-muted-foreground mt-16">
          Дышите ровно. Работайте спокойно.
        </footer>
      </div>
    </div>
  );
};

export default Index;
