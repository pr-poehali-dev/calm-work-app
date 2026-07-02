import { useState, useEffect, useRef, useCallback } from 'react';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import { QUOTES } from '@/data/quotes';
import { TRACKS } from '@/data/tracks';

const Index = () => {
  const [quote, setQuote] = useState(QUOTES[0]);
  const [quoteKey, setQuoteKey] = useState(0);

  const [trackIndex, setTrackIndex] = useState(0);
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

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        audio.volume = volume / 100;
        await audio.play();
        setIsPlaying(true);
      } catch {
        toast('Не удалось запустить трек. Попробуйте другой.');
      }
    }
  };

  const selectTrack = async (index: number) => {
    setTrackIndex(index);
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = TRACKS[index].src;
    audio.volume = volume / 100;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const nextTrack = () => selectTrack((trackIndex + 1) % TRACKS.length);
  const prevTrack = () => selectTrack((trackIndex - 1 + TRACKS.length) % TRACKS.length);

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
  const current = TRACKS[trackIndex];

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      <audio
        ref={audioRef}
        src={current.src}
        loop
        preload="none"
        onEnded={nextTrack}
        onError={() => setIsPlaying(false)}
      />

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

            <div className="rounded-2xl bg-secondary/60 p-4 mb-6">
              <div className="text-xs text-muted-foreground mb-1">{current.mood}</div>
              <div className="font-medium">{current.name}</div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={prevTrack}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Icon name="SkipBack" size={18} />
              </button>
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
              >
                <Icon name={isPlaying ? 'Pause' : 'Play'} size={26} />
              </button>
              <button
                onClick={nextTrack}
                className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Icon name="SkipForward" size={18} />
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <Icon name="Volume2" size={16} />
                Громкость
              </div>
              <Slider value={[volume]} onValueChange={(v) => setVolume(v[0])} max={100} step={1} />
            </div>

            <div className="max-h-40 overflow-y-auto pr-1 space-y-1">
              {TRACKS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => selectTrack(i)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-colors flex items-center justify-between ${
                    i === trackIndex ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'
                  }`}
                >
                  <span>{t.name}</span>
                  <span className={`text-xs ${i === trackIndex ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{t.mood}</span>
                </button>
              ))}
            </div>
          </div>

          <div id="timer" className="rounded-3xl bg-card border border-border p-8 shadow-sm h-fit">
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
