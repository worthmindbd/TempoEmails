/**
 * Synthesizes a delicate, pleasant notification chime using the Web Audio API
 */

class SoundNotifier {
  private audioCtx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private isUnlocked: boolean = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('tempomail_sound_enabled');
      this.soundEnabled = stored !== 'false';

      // Auto-unlock AudioContext on first user gesture anywhere
      const unlockAudio = () => {
        try {
          if (!this.audioCtx) {
            const AudioContextClass =
              window.AudioContext ||
              (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (AudioContextClass) {
              this.audioCtx = new AudioContextClass();
            }
          }
          if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
          }
          this.isUnlocked = true;
        } catch {}

        ['click', 'keydown', 'touchstart'].forEach((event) =>
          window.removeEventListener(event, unlockAudio)
        );
      };

      ['click', 'keydown', 'touchstart'].forEach((event) =>
        window.addEventListener(event, unlockAudio, { once: true })
      );
    }
  }

  public isEnabled(): boolean {
    return this.soundEnabled;
  }

  public toggle(): boolean {
    this.soundEnabled = !this.soundEnabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('tempomail_sound_enabled', String(this.soundEnabled));
    }
    if (this.soundEnabled) {
      // Play a gentle preview so the user knows sound is on and working
      this.playNotificationChime();
    }
    return this.soundEnabled;
  }

  public playNotificationChime(): void {
    if (!this.soundEnabled || typeof window === 'undefined') return;

    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume().catch(() => {});
      }

      const now = this.audioCtx.currentTime;

      // Note 1 (C6 - 1046.5 Hz)
      const osc1 = this.audioCtx.createOscillator();
      const gain1 = this.audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(1046.5, now);
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.25, now + 0.02);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc1.connect(gain1);
      gain1.connect(this.audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.45);

      // Note 2 (E6 - 1318.5 Hz) - bright harmonic chime
      const osc2 = this.audioCtx.createOscillator();
      const gain2 = this.audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1318.5, now + 0.08);
      gain2.gain.setValueAtTime(0, now + 0.08);
      gain2.gain.linearRampToValueAtTime(0.3, now + 0.1);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      osc2.connect(gain2);
      gain2.connect(this.audioCtx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.65);

      // Note 3 (A6 - 1760 Hz) - sparkling tail
      const osc3 = this.audioCtx.createOscillator();
      const gain3 = this.audioCtx.createGain();
      osc3.type = 'triangle';
      osc3.frequency.setValueAtTime(1760, now + 0.16);
      gain3.gain.setValueAtTime(0, now + 0.16);
      gain3.gain.linearRampToValueAtTime(0.2, now + 0.18);
      gain3.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
      osc3.connect(gain3);
      gain3.connect(this.audioCtx.destination);
      osc3.start(now + 0.16);
      osc3.stop(now + 0.85);
    } catch (err) {
      console.warn('Audio chime playback error:', err);
    }
  }
}

export const soundNotifier = new SoundNotifier();
