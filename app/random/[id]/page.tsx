const DetailsPage = ({ params }: any) => {
  return (
    <div>
      <h1>Details Page</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default DetailsPage;
