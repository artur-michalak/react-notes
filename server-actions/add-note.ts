"use server";

import { BaseUrl } from "@/utils";

async function addNote(note: string, isTask?: boolean, id?: string) {
  try {
    const apiURL = BaseUrl.api;
    if (!apiURL) throw new Error("invalid api url");
    await fetch(`${apiURL}/notes`, {
      method: "POST",
      next: { tags: ["notes"] },
      body: JSON.stringify({ id, payload: { note, isTask } }),
    });
  } catch (error) {
    throw error;
  }
}

export default addNote;
