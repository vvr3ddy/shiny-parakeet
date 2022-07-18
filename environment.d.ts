export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_API_KEY: string;
      ENV: 'test' | 'dev' | 'prod';
      OWNER: number;
      DB_PORT: number;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_HOST: string;
    }
  }
}