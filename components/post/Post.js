import "./post.scss";

const Post = ({ posts }) => {
  let postsResult;

  if (posts !== null && posts.length > 0) {
    postsResult = posts.map((item) => {
      return (
        <div className="containerPost" key={item.image}>
          <div className="containerPost_upper">
            <div className="containerPost_new">NEW</div>
            <img
              src={item.image}
              alt={item.alt}
              className="containerPost_image"
            />
          </div>
          <div className="containerPost_lowwer">
            <div className="containerPost_selection">
              <button className="containerPost_choice blueColor">Google</button>
              <button className="containerPost_choice">Trending</button>
              <button className="containerPost_choice">New</button>
            </div>
            <h2 className="containerPost_title">{item.title}</h2>
            <p className="containerPost_text">{item.text}</p>
            <div className="containerPost_postInfo">
              <div className="containerPost_date">
                <img src="/icons/clock.svg" alt="clock" />
                {item.date}
              </div>
              <button className="containerPost_comments">
                <img src="/icons/stat.svg" alt="stat" />
                {item.comments}
              </button>
            </div>
            <button className="containerPost_learn">
              Learn More
              <img src="/icons/arrowRight.svg" alt="arrowRight" />
            </button>
          </div>
        </div>
      );
    });
  } else {
    postsResult = <h2 className="empty">There is no products..</h2>;
  }

  return <div className="postCards">{postsResult}</div>;
};

export default Post;
