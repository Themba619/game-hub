import image from "../../../../public/ReactLogo.png";

export const Logo = () => {
  return (
    <div style={{ position: "relative", left: "5px", bottom: "5px" }}>
      <img src={image} alt="React Logo" width={100} height={50} />
    </div>
  );
};
