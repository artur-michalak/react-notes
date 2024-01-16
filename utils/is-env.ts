const isEnv = (env: typeof process.env.NODE_ENV) => process.env.NODE_ENV === env;

export default isEnv;
