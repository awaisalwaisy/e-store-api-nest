export interface EnvConfig {
  port: number;
  dbUrl: string;
}

export default (): EnvConfig => ({
  port: parseInt(process.env.PORT) || 3000,
  dbUrl: process.env.DATABASE_URL,
});
