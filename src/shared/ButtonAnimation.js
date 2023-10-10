import { ThreeDots } from "react-loader-spinner";
const ButtonAnimation = () => {
  return (
    <ThreeDots
      height="30"
      width="30"
      radius="9"
      color="#ffffff"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default ButtonAnimation;
