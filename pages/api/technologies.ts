import type { NextApiRequest, NextApiResponse } from "next";
import type { Image } from "@/types/image";
import technologies from "@/db/stack.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Image[]>
) {
  res.status(200).end(JSON.stringify(technologies));
}
