"use server";

import { BaseUrl } from "@/utils";

async function deleteNote(id: string) {
  try {
    const apiURL = BaseUrl.api;
    if (!apiURL) throw new Error("invalid api url");
    await fetch(`${apiURL}/notes`, {
      method: "DELETE",
      next: { tags: ["notes"] },
      body: JSON.stringify({ id }),
    });
  } catch (error) {
    throw error;
  }
}

export default deleteNote;
