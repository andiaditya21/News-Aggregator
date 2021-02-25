import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <h3>
          <Skeleton />
        </h3>
        <p>
          <Skeleton count={5} />
        </p>
      </div>
    </div>
  );
};

export default Loading;
