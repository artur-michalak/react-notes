import { List } from '@/components';
import { NewNoteDialog } from '@/content';
import { getNotes } from '@/server-actions';
import prepareItems from '@/utils/prepareItems';

export default async function Home({ params }: { params: { lang: string } }) {
  const notes = await getNotes();
  return (
    <div className="flex-grow">
      <NewNoteDialog />
      <main>
        <List items={prepareItems(notes, params.lang)} lang={params.lang} />
      </main>
    </div>
  );
}
