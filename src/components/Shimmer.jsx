const Shimmer = () => {
  return (
    <div className="body">
      <div className="filter shimmer-container">
        <div className="search shimmer-search">
          <div className="shimmer-search-box"></div>
          <div className="shimmer-btn-small"></div>
        </div>
        <div className="shimmer-btn-large"></div>
      </div>
      <div className="res-container">
        {Array(8).fill("").map((_, index) => (
          <div className="res-card shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-line"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-meta">
              <div className="shimmer-dot"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;