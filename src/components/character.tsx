export type Character = { name: string };

export const StarWarsCharacter: React.FC<Character> = ({ name }) => (
    <div>{name}</div>
);