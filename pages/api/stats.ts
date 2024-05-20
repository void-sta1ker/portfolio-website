import type { NextApiRequest, NextApiResponse } from "next";
import stats from "@/db/stats.json";
import type { Stats } from "@/types/stats";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stats[]>
) {
  res.status(200).end(JSON.stringify(stats));
}
