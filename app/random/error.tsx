"use client";

import BackButton from "../components/BackButton";

export default function Error() {
  return (
    <>
      <BackButton link={"/random"} buttonText="Go Back" />
      <h1 className="text-white text-center animate-pulse mt-10 text-4xl">
        There was an error loading the data
      </h1>
    </>
  );
}
