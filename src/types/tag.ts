import type { Image } from "./image";

type TagColor =
  | "red"
  | "green"
  | "blue"
  | "darkblue"
  | "yellow"
  | "purple"
  | "orange";
export type Tag = { text: string; color: TagColor; image: Image };
