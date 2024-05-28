import { Oval } from "react-loader-spinner";
const PageLoader = () => {
  return (
    <div className="grid place-items-center w-full h-[500px]">
      <div className="flex flex-col justify-center content-center">
        <Oval
          visible={true}
          height="80"
          width="80"
          color="rgb(15,23,42)"
          secondaryColor="rgb(25,46,84)"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h1 className="text-center text-xl">Loading...</h1>
      </div>
    </div>
  );
};
export default PageLoader;
