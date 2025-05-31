const Shimmer = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn shimmer-btn">Top Rated</button>
      </div>
      <div className="res-container">
        {Array(8).fill("").map((_, index) => (
          <div className="res-card shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
