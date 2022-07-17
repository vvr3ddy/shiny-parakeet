export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BOT_API_KEY: string;
      ENV: 'test' | 'dev' | 'prod';
      OWNER: number;
    }
  }
}