declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production" | "test";
      readonly PROJECTS_URL: string;
      readonly TECHNOLOGIES_URL: string;
      readonly STATS_URL: string;
      readonly CLIENTS_URL: string;
    }
  }
}

export {};
