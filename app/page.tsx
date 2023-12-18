import List from "@/components/list";

export default function Home() {
  return (
    <main className="flex-grow w-full">
      <List
        items={[
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
  );
}
