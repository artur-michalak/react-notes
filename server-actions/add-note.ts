'use server'

import { revalidateTag } from "next/cache";

export default async function addNote(text: string) {
  try {
    await fetch(`${process.env.VERCEL_URL}/api/notes`, {
      method: "POST",
      next: { tags: ["notes"] },
      body: JSON.stringify({ text }),
    });
    revalidateTag('notes')
  } catch (error) {
    throw error;
  }
}
