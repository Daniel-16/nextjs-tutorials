import Details from "@/app/components/Details";

export default function ReadMore({ params: { id } }: any) {
  return (
    <>
      <Details id={id} />
    </>
  );
}
