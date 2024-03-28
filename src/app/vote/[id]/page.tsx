"use client";

import Rating from "@/components/Rating";
import { useState } from "react";

interface VotePageProps {
  params: {
    id: string;
  };
}

interface Restaurant {
  name: string;
  distance: number;
  types: string[];
  rating: number;
}

const places: Restaurant[] = [
  {
    name: "Cabo Bob's",
    distance: 8,
    types: ["mexican", "quick"],
    rating: 4,
  },
  {
    name: "Blue Sushi",
    distance: 0.01,
    types: ["sushi", "asian"],
    rating: 5,
  },
];

export default function VotePage({ params: { id } }: VotePageProps) {
  const [currentPlace, setCurrentPlace] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const getNextPlace = () => {
    if (currentPlace < places.length - 1) {
      setCurrentPlace(currentPlace + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {!showResult ? (
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-1">
          <h1 className="text-3xl">{places[currentPlace].name}</h1>
          <p className="text-lg">{places[currentPlace].distance} miles away</p>
          <Rating rating={places[currentPlace].rating} />
          <div>
            {places[currentPlace].types.map((typeName, index) => (
              <span className="badge badge-primary mx-1" key={index}>
                {typeName}
              </span>
            ))}
          </div>
          <div className="flex flex-row">
            <button className="btn btn-success mr-1" onClick={getNextPlace}>
              Yes
            </button>
            <button className="btn btn-error" onClick={getNextPlace}>
              No
            </button>
          </div>
        </div>
      ) : (
        <h1>Done!</h1>
      )}
    </div>
  );
}
