interface TypeEffectOptions {
  job: string;
  jobs: string[];
  callback?: Function;
}

interface WriteOptions {
  isReverse: boolean;
  ms: number;
}

class TypeEffect {
  job: string;
  jobs: string[];
  jobIDX: number;
  callbackFunction: Function | undefined;
  isPaused: boolean;

  constructor(options: TypeEffectOptions) {
    this.job = "";
    this.jobIDX = -1;
    this.isPaused = false;
    this.jobs = options.jobs;
    this.callbackFunction = options.callback;
  }

  update() {
    if (this.isPaused) return;

    this.jobIDX++;
    if (this.jobIDX > this.jobs.length - 1) this.jobIDX = 0;

    setTimeout(() => {
      this.write({ isReverse: false, ms: 100 });
    }, 1000);
  }

  write(options: WriteOptions) {
    const job = `${this.jobs[this.jobIDX]}`;
    const maxStringLength = job.length;
    const { isReverse, ms } = options;

    let IDX = isReverse ? maxStringLength : -1;

    const loop = setInterval(() => {
      if (isReverse) {
        IDX--;
      } else {
        IDX++;
      }

      if (IDX >= maxStringLength || (isReverse && IDX < 0)) {
        clearInterval(loop);
        return isReverse
          ? this.update()
          : setTimeout(() => this.write({ isReverse: true, ms: 50 }), 2400);
      }

      if (!isReverse) {
        let nextChar = job[IDX];
        let nextIDX = IDX + 1;

        if (nextChar === " " && nextIDX < maxStringLength) {
          nextChar += job[nextIDX];
          IDX = nextIDX; // Skip the next index since it was handled together
        }

        this.job += nextChar;
      } else {
        let prevChar = job[IDX];
        let prevIDX = IDX - 1;

        if (prevChar === " " && prevIDX >= 0) {
          IDX = prevIDX; // Skip the previous index if it's part of the space sequence
        }

        this.job = IDX === 0 ? "&nbsp;" : job.substring(0, IDX);
      }

      this.onWrite();
    }, ms);
  }

  onWrite() {
    if (typeof this.callbackFunction !== "function") return;

    this.callbackFunction(this.job);
  }

  pause() {
    this.isPaused = true;
  }

  start() {
    this.isPaused = false;
    this.update();
  }
}

export default TypeEffect;

/*

const defineJob = () => {
    jobIDX.value++;
    if (jobIDX.value > jobs.value.length - 1) jobIDX.value = 0;
    const job = jobs.value[jobIDX.value];
    setTimeout(setJobIntervall(job), 1000);
  };
  
  const setJobIntervall = (job: string) => {
    const maxStringLength = job.length;
    let IDX = -1;
  
    const loop = setInterval(() => {
      IDX++;
      // PREVENT JUMPY EMPTY SPACES
      if (job[IDX] === " ") {
        job += " ";
        IDX++;
      }
      if (IDX >= maxStringLength) {
        clearInterval(loop);
        resetJob();
        return;
      }
      job.value = IDX === 0 ? job[IDX] : job.value + job[IDX];
    }, 100);
  };
  
  const resetJob = () => {
    setTimeout(() => {
      let IDX = job.value.length;
      const loop = setInterval(() => {
        IDX--;
        // PREVENT JUMPY EMPTY SPACES
        if (job.value[IDX] === " ") {
          job.value = job.value.substring(-1, IDX);
          IDX--;
        }
        if (IDX <= 0) {
          clearInterval(loop);
          job.value = "&nbsp;";
          setTimeout(defineJob, 500);
          return;
        }
        job.value = job.value.substring(-1, IDX);
      }, 50);
    }, 3000);
  };
  */
