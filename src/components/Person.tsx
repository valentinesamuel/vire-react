interface Props {
  names: string[];
}

export const Person: React.FC<Props> = ({ names }) => {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};
