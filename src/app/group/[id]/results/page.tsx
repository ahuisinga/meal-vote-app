import { getGroup } from "@/lib/db/group";

interface ResultsPageProps {
  params: {
    id: string;
  };
}

export default async function ResultsPage({
  params: { id },
}: ResultsPageProps) {
  const hour = new Date().getHours();
  let meal: string;
  if (hour >= 5 && hour < 12) {
    meal = "breakfast";
  } else if (hour >= 12 && hour < 18) {
    meal = "lunch";
  } else {
    meal = "dinner";
  }
  const group = await getGroup(id);
  if (!group) {
    return <h1>Group Not Found</h1>;
  }
  const results = group.rankings;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl">Your {meal} destination:</h2>
      <h1 className="text-4xl font-semibold">
        &#127881; {results[0].name} &#127881;
      </h1>
      <br />
      <h2 className="text-2xl underline">Runner Ups</h2>
      <ol className="list-decimal">
        {results?.slice(1, 4).map((res) => (
          <li className="text-xl" key={res.id}>
            {res.name}
          </li>
        ))}
      </ol>
      <h3 className="text-lg">
        {group.numFinishedVotes} out of {group.activeUsers.length} people have
        finished voting
      </h3>
    </div>
  );
}
