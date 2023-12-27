"use server";

export default async function addNote(text: string, id?: string) {
  try {
    const apiURL = process.env.API_URL;
    if (!apiURL) throw new Error("invalid api url");
    await fetch(`${apiURL}/notes`, {
      method: "POST",
      next: { tags: ["notes"] },
      body: JSON.stringify({ id, payload: { text } }),
    });
  } catch (error) {
    throw error;
  }
}
