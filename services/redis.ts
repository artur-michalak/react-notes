"use server";

import type { RedisOptions } from "ioredis";
import Redis from 'ioredis';

import { tryParseInt } from '@/utils/tryParseInt';

const defaultConfig = {
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  port: tryParseInt(process.env.REDIS_PORT),
};

export async function createRedisInstance(config = defaultConfig) {
  const { host, password, port } = config;
  try {
    const options: RedisOptions = {
      host,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    if (port) options.port = port;
    if (password) options.password = password;
    const redis = new Redis(options);

    redis.on("error", (error: unknown) => {
      console.warn("[Redis] Error connecting", error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}
