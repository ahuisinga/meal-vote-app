"use server";

import { prisma } from "@/lib/db/prisma";
import generateGroupCode from "@/lib/generateGroupCode";
import { restaurants } from "@/lib/mockPlaceData";
import { Place } from "@prisma/client";
import { redirect } from "next/navigation";

export async function createNewGroup() {
  const mockPlaces = restaurants;
  const places: Place[] = mockPlaces.map((place) => ({
    id: place.id,
    name: place.name,
  }));
  const group = await prisma.voteGroup.create({
    data: {
      groupCode: generateGroupCode(),
      places,
    },
  });
  redirect("/group/start/" + group.id);
}
