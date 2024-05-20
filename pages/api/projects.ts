import type { NextApiRequest, NextApiResponse } from "next";
import type { Project } from "@/types/project";
import projects from "@/db/projects.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  res.status(200).end(JSON.stringify(projects));
}
