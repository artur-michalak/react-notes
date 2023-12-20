import List from "@/components/list";
import AddNote from "@/content/add-note";
import Item from "@/content/item";
import getNotes from "@/server-actions/get-notes";

export default async function Home() {
  const notes = await getNotes();
  return (
    <div className="flex-grow">
      <AddNote />
      <main>
        <List
          items={notes.map(({text, createdAt, id}, key) => ({
            children: <Item title={text.length < 30 ? text : `${text.slice(0, 27)}...`} date={createdAt?.toLocaleDateString()} />,
            id
          })).map((props) => ({
            ...props,
            className: [
              "bg-red-200",
              "bg-blue-200",
              "bg-yellow-200",
              "bg-slate-300",
            ][Math.floor(Math.random() * 4)],
          }))}
        />
      </main>
    </div>
  );
}
