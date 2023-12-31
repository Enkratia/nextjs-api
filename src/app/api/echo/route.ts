import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);

  // const name = searchParams.get("name");
  // const instrument = searchParams.get("instrument");

  const obj = Object.fromEntries(searchParams.entries());

  // console.log(new URL(request.url));
  return NextResponse.json(obj);
};
