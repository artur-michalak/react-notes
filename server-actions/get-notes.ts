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

    const res = fetch(apiURL, {
      next: { tags: ["notes"] },
    });

    console.log(await res);

    return await res
      .then((res) => res.json())
      .then((res: Note[]) =>
        res.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
      );
  } catch (error) {
    throw error;
  }
}
