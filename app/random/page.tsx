// import ApiButton from "../components/ApiButton";

import Link from "next/link";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return response.json();
}

const RandomData = async () => {
  const randomData = await fetchData();
  // console.log(randomData);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-white p-10 font-bold text-center">
        Random Data
      </h1>
      {/* <p className="px-5 md:px-0">{randomData.title}</p> */}
      <ul>
        {randomData.map((data: { title: string; id: number; body: string }) => (
          <li key={data.id} className="mb-5 px-5 md:px-0">
            <h1 className="font-bold text-lg">{data.title}</h1>
            <p className="text-sm">{data.body}</p>
            <div className="mt-5">
              <Link
                className="py-3 px-4 bg-blue-700 rounded-lg hover:bg-blue-500 text-md"
                // onClick={() => alert(`${title}`)}
                href={`/random/${data.id}`}
              >
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomData;
