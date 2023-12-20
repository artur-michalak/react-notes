"use server";

export interface Note {
  id: string;
  text: string;
  createdAt: Date,
}

export default async function getNotes() {
  try {
    const res = await fetch(`${process.env.VERCEL_URL}/api/notes`).then((res) =>
      res.json()
    );
    return res as Note[];
  } catch (error) {
    throw error;
  }
}
