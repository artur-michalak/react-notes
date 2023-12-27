"use server";

import { revalidateTag } from "next/cache";

export default async function addNote(text: string, id?: string) {
  try {
    const apiURL = process.env.API_URL;
    if (!apiURL) throw new Error("invalid api url");
    await fetch(`${apiURL}/notes`, {
      method: "POST",
      next: { tags: ["notes"] },
      body: JSON.stringify({ id, payload: { text } }),
    });
    revalidateTag("notes");
  } catch (error) {
    throw error;
  }
}
