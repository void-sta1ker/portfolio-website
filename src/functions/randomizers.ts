export function randomizeInitialLocation(x: number, y: number) {
  const initialX = Math.floor(Math.random() * x);
  const initialY = Math.floor(Math.random() * y);

  return [initialX, initialY];
}

export function* randomizeLocation(x: number, y: number) {
  const xArr: number[] = [];
  const yArr: number[] = [];

  for (let i = 0; i < x; i += 1) {
    xArr.push(i);
  }

  for (let i = 0; i < y; i += 1) {
    yArr.push(i);
  }

  while (true) {
    const xIdx = Math.floor(Math.random() * x);
    const yIdx = Math.floor(Math.random() * y);

    yield { x: xArr[xIdx], y: yArr[yIdx] };
  }
}

export function randomize() {
  const randomN = Math.random();
  if (randomN > 0.66) {
    return "#fff";
  }
  if (randomN > 0.33) {
    return "#e6e6e6";
  }
  return "#6c63ff";
}

export function randomizeRotationDegree() {
  const randomN = Math.random();
  if (randomN > 0.66) {
    return 0;
  }
  if (randomN > 0.33) {
    return 90;
  }
  return 180;
  // return Math.floor(Math.random() * 360);
}

export function randomizeRotationDirection() {
  const randomN = Math.random();
  if (randomN > 0.5) {
    return "-";
  }
  return "";
}
