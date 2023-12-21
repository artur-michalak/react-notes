import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

import { createRedisInstance } from "@/services/redis";

interface CatalogItem<T = Object> {
  id: string;
  payload: T;
}

type NoteProps = { text: string; createdAt: Date };

export async function POST(request: Request) {
  const redis = await createRedisInstance();
  const data: CatalogItem<NoteProps> = await request.json();
  if (!data.id) data.id = uuid();
  else {
    const cached = await redis.hget("notes", data.id);
    if (cached === JSON.stringify(data.payload))
      return NextResponse.json(JSON.parse(cached));
  }

  data.payload.createdAt = new Date();

  await redis.hset("notes", data.id, JSON.stringify(data.payload));
  return NextResponse.json(data.payload);
}

export async function GET() {
  const redis = await createRedisInstance();
  const notes = await redis.hgetall("notes");
  const response = Object.keys(notes).reduce(
    (dst, cur) => [...dst, { id: cur, ...(JSON.parse(notes[cur]) || {}) }],
    [] as { id: string; [key: string]: unknown }[]
  );

  return NextResponse.json(response);
}
