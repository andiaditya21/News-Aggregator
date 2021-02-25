import Skeleton from "react-loading-skeleton";

const Loading = ({ count }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-8">
        <h3>
          <Skeleton />
        </h3>
        <p>
          <Skeleton count={count} />
        </p>
      </div>
    </div>
  );
};

export default Loading;
