type EnvType = {
  /** アプリ名 */
  APP_NAME: string;
  /** 環境名 */
  ENV_NAME: string;
  /** エンドポイント URL */
  ENDPOINT_URL: string;
  /** Stripe キー */
  STRIPE_KEY: string;
};

let Env = {
  APP_NAME: 'LaraEC',
  ENV_NAME: 'local',
  ENDPOINT_URL: 'https://laraec.isystk.com/api',
  STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
} as EnvType;
if (process.env.NEXT_PUBLIC_ENV_NAME === 'production') {
  Env = {
    ...Env,
    ENV_NAME: process.env.NEXT_PUBLIC_ENV_NAME,
    ENDPOINT_URL: process.env.NEXT_PUBLIC_ENDPOINT_URL,
  } as EnvType;
}

export default Env;
