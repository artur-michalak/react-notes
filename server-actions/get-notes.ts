"use server";

export interface Note {
  id: string;
  text: string;
  createdAt: Date;
}

export default async function getNotes() {
  try {
    const apiURL = process.env.API_URL;
    if (!apiURL) throw new Error("invalid api url");

    const res = fetch(`${apiURL}/notes`, {
      next: { tags: ["notes"] },
    })
      .then((res) => res.json())
      .then((res: Note[]) =>
        res.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
      );

    return res;
  } catch (error) {
    throw error;
  }
}
