const DetailsPage = ({ data }: { data: any }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <p>{data.title}</p>
    </div>
  );
};

export default DetailsPage;
