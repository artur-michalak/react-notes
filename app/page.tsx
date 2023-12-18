import List from "@/components/list";
import AddNote from "@/content/add-note";

export default function Home() {
  return (
    <div className="flex-grow">
      <AddNote />
      <main>
        <List
          items={[
            {
              className: "h-96 bg-red-200",
              children: null,
              isTask: true,
            },
            {
              className: "h-80 bg-blue-200",
              children: null,
            },
            {
              className: "h-40 bg-yellow-200",
              children: null,
            },
            {
              className: "h-96 bg-slate-600",
              children: null,
            },
            {
              className: "h-96 bg-red-200",
              children: null,
            },
            {
              className: "h-80 bg-blue-200",
              children: null,
            },
            {
              className: "h-40 bg-yellow-200",
              children: null,
            },
            {
              className: "h-96 bg-slate-600",
              children: null,
            },
          ]}
        />
      </main>
    </div>
  );
}
