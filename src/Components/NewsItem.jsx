import React from "react";
// import News from './News'
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="mx-5">
        <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              display: "flex",
              position: "absolute",
              justifyContent: "flex-end",
              right: "0",
              top: "-8px",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageUrl} alt="" />
          <div className="card-body">
            <h5 className="card-title">
              {title}...<span className="btn btn-warning">New</span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-success">
                by {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
