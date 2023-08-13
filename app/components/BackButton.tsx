import Link from "next/link";

export default function BackButton({
  link,
  buttonText,
}: {
  link: any;
  buttonText: string;
}) {
  return (
    <div className="mt-5 px-10">
      <Link
        className="bg-blue-700 px-4 py-3 rounded-lg hover:bg-blue-500"
        href={link}
      >
        {buttonText}
      </Link>
    </div>
  );
}
