"use server";

export interface Note {
  id: string;
  text: string;
  createdAt: Date;
}

export default async function getNotes() {
  try {
    const res = fetch(
      `${process.env.API_URL || `https://${process.env.VERCEL_URL}`}/api/notes`,
      {
        next: { tags: ["notes"] },
      }
    );

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
