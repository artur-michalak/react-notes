import { List } from '@/components';
import Hydrate from '@/content/hydrate';
import { getNotes } from '@/server-actions';
import getQueryClient from '@/utils/getQueryClient';
import { dehydrate } from '@tanstack/react-query';

export default async function Home({ params }: { params: { lang: string } }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({ queryKey: ["notes"], queryFn: getNotes });
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <main className="flex-grow">
        <div>API {process.env.API_URL}</div>
        <div>VERCEL {process.env.VERCEL_URL}</div>
        <List lang={params.lang} />
      </main>
    </Hydrate>
  );
}
