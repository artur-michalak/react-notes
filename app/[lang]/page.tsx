import List from "@/components/list";
import AddNote from "@/content/add-note";
import Item from "@/content/item";

export default function Home() {
  return (
    <div className="flex-grow">
      <AddNote />
      <main>
        <List
          items={[
            {
              className: "bg-red-200",
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
              isTask: true,
            },
            {
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
            },
            {
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
            },
            {
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
            },
            {
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
            },
            {
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
            },
            {
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
            },
            {
              children: <Item title="Class Notes" date="Monday 12/12/2023" />,
            },
          ].map((props) => ({
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
