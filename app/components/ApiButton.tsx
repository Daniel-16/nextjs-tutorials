"use client";
import Link from "next/link";

export default function ApiButton({ title }: { title: string }) {
  return (
    <div className="mt-5">
      <Link
        className="py-3 px-4 bg-blue-700 rounded-lg hover:bg-blue-500 text-md"
        // onClick={() => alert(`${title}`)}
        href={`/random/${title}`}
      >
        Read more
      </Link>
    </div>
  );
}
