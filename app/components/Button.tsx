const Button = ({ buttonText }: { buttonText: string }) => {
  return (
    <button className="px-4 py-3 bg-blue-600 font-semibold rounded-lg hover:bg-blue-800">
      {buttonText}
    </button>
  );
};

export default Button;
