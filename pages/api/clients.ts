import type { NextApiRequest, NextApiResponse } from "next";
import type { Image } from "@/types/image";
import clients from "@/db/clients.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Image[]>
) {
  res.status(200).end(JSON.stringify(clients));
}
