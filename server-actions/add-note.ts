"use server";

import { revalidateTag } from "next/cache";

export default async function addNote(text: string, id?: string) {
  try {
    await fetch(`${process.env.API_URL || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}/api/notes`, {
      method: "POST",
      next: { tags: ["notes"] },
      body: JSON.stringify({ id, payload: { text } }),
      redirect: 'follow'
    });
    revalidateTag("notes");
  } catch (error) {
    throw error;
  }
}
