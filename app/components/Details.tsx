import BackButton from "./BackButton";

async function fetchData(id: any) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

const Details = async ({ id }: any) => {
  const data = await fetchData(id);
  console.log(data);

  return (
    <div className="container mx-auto">
      <BackButton link={"/random"} buttonText="Go Back" />
      <h1 className="text-4xl px-10 font-bold mt-10">{data.title}</h1>
      <p className="px-10">{data.body}</p>
    </div>
  );
};

export default Details;
