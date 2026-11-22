/**
 * Serene Web Audio synthesizer inspired by Indian acoustic santoor & tanpura
 * in Raag Bhupali (pentatonic C-D-E-G-A) for the wedding invitation soundtrack.
 * Plays smoothly with zero external media dependencies.
 */
class WeddingMelodyPlayer {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private droneOscs: OscillatorNode[] = [];
  private timerId: number | null = null;
  private step = 0;
  private playing = false;

  // Gentle Raag Bhupali melodic phrase (Hz)
  private readonly phrase: (number | null)[] = [
    523.25, 587.33, 659.25, null, 783.99, 659.25, 587.33, null,
    659.25, 783.99, 880.0, null, 1046.5, 880.0, 783.99, 659.25,
    587.33, 659.25, 523.25, null, 440.0, 523.25, 587.33, null,
    659.25, 587.33, 523.25, null, 392.0, 440.0, 523.25, null,
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.001;
      this.masterGain.connect(this.ctx.destination);
    }
  }

  private startDrone() {
    if (!this.ctx || !this.masterGain || this.droneOscs.length > 0) return;

    const droneFreqs = [130.81, 196.0, 261.63]; // Sa - Pa - Sa (C3, G3, C4)
    droneFreqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = idx === 1 ? 'triangle' : 'sine';
      osc.frequency.value = freq;

      filter.type = 'lowpass';
      filter.frequency.value = 420;

      gain.gain.value = idx === 0 ? 0.055 : 0.03;

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);
      osc.start();
      this.droneOscs.push(osc);
    });
  }

  private pluckNote(freq: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const overtone = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const env = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now);
    filter.frequency.exponentialRampToValueAtTime(680, now + 1.4);

    env.gain.setValueAtTime(0.0001, now);
    env.gain.linearRampToValueAtTime(0.11, now + 0.045);
    env.gain.exponentialRampToValueAtTime(0.0008, now + 1.8);

    const overtoneGain = this.ctx.createGain();
    overtoneGain.gain.value = 0.22;

    osc.connect(filter);
    overtone.connect(overtoneGain);
    overtoneGain.connect(filter);
    filter.connect(env);
    env.connect(this.masterGain);

    osc.start(now);
    overtone.start(now);
    osc.stop(now + 1.85);
    overtone.stop(now + 1.85);
  }

  async play(): Promise<boolean> {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return false;
      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }
      if (this.playing) return true;

      this.playing = true;
      this.startDrone();

      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setTargetAtTime(0.65, now, 0.35);

      const scheduleStep = () => {
        if (!this.playing) return;
        const note = this.phrase[this.step % this.phrase.length];
        if (note) {
          this.pluckNote(note);
        }
        this.step += 1;
      };

      scheduleStep();
      this.timerId = window.setInterval(scheduleStep, 580);
      return true;
    } catch {
      this.playing = false;
      return false;
    }
  }

  pause() {
    this.playing = false;
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    if (this.ctx && this.masterGain) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setTargetAtTime(0.0001, now, 0.2);
    }
  }

  isPlaying() {
    return this.playing;
  }
}

export const weddingMelody = new WeddingMelodyPlayer();
