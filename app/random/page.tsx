async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return response;
}

const RandomData = async () => {
  const randomData = await fetchData();
  //   console.log(randomData);

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomData;
