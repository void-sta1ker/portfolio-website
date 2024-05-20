import * as React from "react";

type Mode = typeof TYPING | typeof DELETING | typeof FINISHED;

type Props = {
  words: string[];
  wait: number;
};

type Part = typeof WORD | typeof LETTER;

type Timer = {
  start: () => Timer;
  clear: () => Timer;
};

let currentWordIdx = 0;
let currentLetterIdx = 0;

const WORD = "word";
const LETTER = "letter";

const TYPING = "typing";
const DELETING = "deleting";
const FINISHED = "finished";

export default function useTypeWriter({ words, wait }: Props) {
  const [mode, setMode] = React.useState<Mode>(TYPING);
  const [output, setOutput] = React.useState<string>("");

  const time = getTimeFrom(mode, wait);

  const setDeleting = createTimeout(() => {
    setMode(DELETING);
    setDeleting.clear();
  }, wait);
  const outputUpdater = createTimeout(
    updateOutput(currentWordIdx, currentLetterIdx),
    time
  );

  const takeAction = React.useCallback(() => {
    if (words[currentWordIdx + 1]) {
      incrementIdx(WORD);
    } else {
      nullifyIdx(WORD);
    }
    setMode(TYPING);
    nullifyIdx(LETTER);
  }, [words]);

  const deferredAction = createTimeout(takeAction, wait);

  function updateOutput(currWord: number, currLetter: number) {
    const onTyping = () => {
      if (currLetter === words[currWord].length) {
        nullifyIdx(LETTER);
        setMode(FINISHED);
      } else {
        setOutput((prev) => `${prev}${words[currWord][currLetter]}`);
        incrementIdx(LETTER);
      }
    };

    const onDeleting = () => {
      if (output) {
        setOutput((prev) => prev.slice(0, -1));
      } else {
        deferredAction.start();
      }
    };

    return () => {
      if (mode === TYPING) {
        onTyping();
      } else if (mode === FINISHED) {
        setDeleting.start();
      } else if (mode === DELETING) {
        onDeleting();
      }
    };
  }

  React.useEffect(() => {
    outputUpdater.start();

    return () => {
      outputUpdater.clear();
      deferredAction.clear();
    };
  }, [deferredAction, outputUpdater]);

  return output;
}

function createTimeout(cb: Function, time: number) {
  let timer: number;

  function start(this: Timer) {
    if (!timer) {
      timer = setTimeout(cb, time);
    }
    return this;
  }

  function clear(this: Timer) {
    clearTimeout(timer);
    return this;
  }

  return {
    start,
    clear,
  };
}

function incrementIdx(part: Part) {
  if (part === WORD) {
    currentWordIdx += 1;
  } else if (part === LETTER) {
    currentLetterIdx += 1;
  }
}

function nullifyIdx(part: Part) {
  if (part === WORD) {
    currentWordIdx = 0;
  } else if (part === LETTER) {
    currentLetterIdx = 0;
  }
}

function getTimeFrom(mode: Mode, waitTime: number = 0) {
  if (mode === DELETING) {
    return waitTime / 10;
  }
  if (mode === TYPING) {
    return waitTime / 5;
  }
  return waitTime;
}
