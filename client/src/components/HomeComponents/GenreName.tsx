import { useColorMode } from "../ui/color-mode";

interface Name {
  name: string;
}

export const GenreName = (props: Name) => {
  const { colorMode } = useColorMode();

  return (
    <div style={{}}>
      {colorMode === "light" ? (
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
          {props.name === "" ? "Genre" : props.name}
        </h1>
      ) : (
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
          {props.name === "" ? "Genre" : props.name}
        </h1>
      )}
    </div>
  );
};
