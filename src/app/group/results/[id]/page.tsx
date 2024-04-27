import { getGroup } from "@/lib/db/group";

interface ResultsPageProps {
  params: {
    id: string;
  };
}

export default async function ResultsPage({
  params: { id },
}: ResultsPageProps) {
  const group = await getGroup(id);
  if (!group) {
    return <h1>Group Not Found</h1>;
  }
  const results = group.rankings;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl">Your dinner destination:</h2>
      <h1 className="text-2xl">{results[0].name}</h1>
      <br />
      <h3 className="text-lg">Full Rankings</h3>
      <ol className="list-decimal">
        {results?.map((res) => <li key={res.id}>{res.name}</li>)}
      </ol>
    </div>
  );
}
