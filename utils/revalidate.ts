"use server";

import { revalidateTag } from "next/cache";

function revalidate(tag: string) {
  revalidateTag(tag);
}

export default revalidate;
