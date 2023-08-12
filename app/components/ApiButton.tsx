"use client";
export default function ApiButton({ title }: { title: string }) {
  return (
    <button
      className="py-3 px-4 bg-blue-700 rounded-lg hover:bg-blue-500 text-md mt-2"
      onClick={() => alert(`${title}`)}
    >
      Read more
    </button>
  );
}
