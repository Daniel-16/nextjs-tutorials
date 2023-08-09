const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-white text-4xl text-center mt-10">
        About Layout
      </h1>
      {children}
    </div>
  );
};

export default AboutLayout;
