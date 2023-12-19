import { createRedisInstance } from "@/services/redis"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    const redis = await createRedisInstance();

    const data: {id: string} = await request.json();

    const cached = await redis.get(data.id);
    if (cached) return NextResponse.json(JSON.parse(cached));

    await redis.set(data.id, JSON.stringify(data));

    return NextResponse.json(data)
}