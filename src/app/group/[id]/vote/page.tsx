"use client";

import Rating from "@/components/Rating";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { voteNo, voteYes } from "./actions";
import { restaurants } from "@/lib/mockPlaceData";
import { prisma } from "@/lib/db/prisma";
import { getGroupCode } from "@/lib/db/group";

interface VotePageProps {
  params: {
    id: string;
  };
}

const places = restaurants;

export default function VotePage({ params: { id } }: VotePageProps) {
  const router = useRouter();

  const [currentPlace, setCurrentPlace] = useState<number>(0);

  const getNextPlace = () => {
    if (currentPlace < places.length - 1) {
      setCurrentPlace(currentPlace + 1);
    } else {
      router.push("/group/results/" + id);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="card w-96 bg-base-300 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {places[currentPlace].name}
              <div>
                {places[currentPlace].types.map((typeName, index) => (
                  <span className="badge badge-primary mx-1" key={index}>
                    {typeName}
                  </span>
                ))}
              </div>
            </h2>
            <p className="text-lg">
              {places[currentPlace].distance} miles away
            </p>
            <Rating rating={places[currentPlace].rating} />
            <div className="card-actions justify-end">
              <button
                className="btn btn-success mr-1"
                onClick={async () => {
                  await voteYes(
                    places[currentPlace].id,
                    places[currentPlace].name,
                    id,
                  );
                  getNextPlace();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
                Yes
              </button>
              <button
                className="btn btn-error"
                onClick={async () => {
                  await voteNo(
                    places[currentPlace].id,
                    places[currentPlace].name,
                    id,
                  );
                  getNextPlace();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
