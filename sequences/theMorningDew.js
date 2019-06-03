/* The morning dew */
const props = new WeakMap();
class Note {
  constructor(key) {
    props.set(this, { key: key });
  }
  get key() {
    return props.get(this).key;
  }
  oct(diff) {
    return new Note(this.key + 12 * diff);
  }
  trans(diff) {
    return new Note(this.key + diff);
  }
  get high() {
    return this.oct(1);
  }
  get low() {
    return this.oct(-1);
  }
  get sharp() {
    return this.trans(+1);
  }
  get flat() {
    return this.trans(-1);
  }
}
const sin = (t, f, a) => a * Math.sin(2 * Math.PI * t * f),
      sqr = (t, f, a) => ((sin(t, f, a) > 0) * 2 - 1) * a;
const toFreq = n => Math.pow(2, (n.key - 33 + transpose + 12 * 2) / 12) * tuning_A,
      toFreqs = measure => measure.map(toFreq),
      toLows = measure => measure.map(note => note.low),
      [C, D, E, F, G, A, B] = [0, 2, 4, 5, 7, 9, 11].map(key => new Note(key));

const tuning_A = 442,
      transpose = 2,
      bpm = 340,
      spb = 60 / bpm;

const //Notes are converted to frequencies before start "dew" to performance problems
      melodies = [
        //A1
        [D, D, D, A, A, G, E, C],
        [D, C, D, A, A, G, E, C],
        [D, D, D, A, A, G, F, G],
        [A, B, C.high, A, G, F, E, C],
        //A2
        [D, D, D, A, A, G, E, C],
        [D, C, D, A, G, F, E, C],
        [D, C, D, A, A, G, F, G],
        [A, B, C.high, A, G, G, F, G],
        //B1
        [A, A, D.high, A, E.high, A, D.high, A],
        [A, A, C.high, A, G, C, E, G],
        [A, A, D.high, A, E.high, A, D.high, A],
        [C.high, B, C.high, A, G, C, E, G],
        //B2
        [A, A, D.high, A, E.high, A, D.high, A],
        [A, A, C.high, A, G, C, E, G],
        [A, C.high, D.high, F.high, E.high, C.high, D.high, B],
        [C.high, C.high, C.high, G, A, G, F, G],
        //C1
        [A, A, D, A, F, A, E, A],
        [A, A, D, A, G, C, E, G],
        [A, A, D, A, F, A, E, A],
        [A, B, C.high, A, G, G, F, G],
        //C2
        [A, A, D, A, F, A, E, A],
        [A, A, D, A, G, C, E, G],
        [A, C.high, D.high, F.high, E.high, C.high, D.high, B],
        [C.high, B, C.high, A, G, F, E, G],
        //D1
        [A, G, F, E, D, E, F, G],
        [A, A, D, A, G, C, E, G],
        [A, G, F, E, D, E, F, G],
        [A, B, C.high, A, G, G, F, G],
        //D2
        [A, G, F, E, D, E, F, G],
        [A, A, D, A, G, C, E, G],
        [A, G, F, E, D, E, F, G],
        [A, B, C.high, A, G, F, E, C]
      ].map(toFreqs),
      bassline = [
        //A1
        [D, D, D, D, C, C, C, C],
        [D, D, D, D, A.low, A.low, C, C],
        [D, D, D, D, C, C, C, C],
        [D, D, D, D, A.low, A.low, G.low, G.low],
        //A2
        [D, D, D, D, C, C, C, C],
        [D, D, D, D, A.low, A.low, C, C],
        [D, D, D, D, C, C, C, C],
        [D, D, A.low, A.low, G.low, G.low, C, C],
        //B1
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, C, C, C, C],
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, C, C, C, C],
        [A.low, A.low, A.low, A.low, C, C, C, C],
        [F.low, F.low, F.low, F.low, E.low, E.low, G.low, C],
        //B2
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, C, C, C, C],
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, C, C, C, C],
        [A.low, A.low, A.low, A.low, C, C, C, C],
        [F.low, F.low, F.low, F.low, G.low, G.low, C, C],
        //C1
        [D, D, D, D, C, C, C, C],
        [D, D, D, D, D, D, C, C],
        [D, D, D, D, C, C, C, C],
        [D, D, D, D, A.low, A.low, C, C],
        //C2
        [D, D, D, D, C, C, C, C],
        [D, D, D, D, D, D, C, C],
        [D, D, D, D, C, C, C, C],
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, C, C, C, C],
        //D1
        [D, D, D, D, C, C, C, C],
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, A.low, A.low, A.low, A.low],
        [D, D, D, D, C, C, C, C],
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, A.low, A.low, A.low, A.low],
        //D2
        [D, D, D, D, C, C, C, C],
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, A.low, A.low, A.low, A.low],
        [D, D, D, D, C, C, C, C],
        [B.low.flat, B.low.flat, B.low.flat, B.low.flat, A.low, A.low, C, C]
      ]
        .map(toLows)
        .map(toFreqs);

const len = melodies.length;

const dsp = t => {
  const counter = Math.floor(t / spb),
        measure = Math.floor(counter / 8) % len,
        beat = counter % 8;
  return sqr(t, melodies[measure][beat], 0.11) + sin(t, bassline[measure][beat], 0.11);
};