interface LoadingProps {
  text: string;
}

export const Loading: React.FC<LoadingProps> = ({ text }) => {
  return <h1>Loading {text}</h1>;
};
