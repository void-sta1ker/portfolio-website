import * as React from "react";
import type { Image } from "./image";
import type { Tag } from "./tag";

type ServiceType = "website" | "admin" | "crm" | "pos";
type Service = { id: string; type: ServiceType; image: Image };

export type Project = {
  id: string;
  name: string;
  image: Image;
  title: Image | string;
  description: string;
  services: Service[];
  tags: Tag[];
};

export type ProjectProps = {
  name: string;
  reverseOrder?: boolean;
  image: Image;
  title: React.ReactNode | string;
  description: string;
  services: Service[];
  tags: Tag[];
};
