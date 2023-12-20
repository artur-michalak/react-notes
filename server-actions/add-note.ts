'use server'

export default async function addNote(text: string) {
  try {
    await fetch(`${process.env.VERCEL_URL}/api/notes`, {
      method: "POST",
      body: JSON.stringify({ text }),
    });
  } catch (error) {
    throw error;
  }
}
