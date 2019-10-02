import React, { Component } from "react";

class PostItem extends Component {
  formatData = () => {
    const { post } = this.props;

    const thumb = post.thumbnail.match("http") ? post.thumbnail : false;
    const title = post.title;
    const user = post.author.name;
    const url = "https://www.reddit.com" + post.permalink;

    const now = new Date();
    const created = new Date(post.created_utc * 1000);
    const timeDifference = Math.abs(now - created);
    let time = "";

    if (timeDifference / (1000 * 60 * 60) < 1) {
      time += Math.floor(timeDifference / (1000 * 60)) + " minutos";
    } else if (Math.floor(timeDifference / (1000 * 60 * 60)) === 1) {
      time += "1 hora";
    } else {
      time += Math.floor(timeDifference / (1000 * 60 * 60)) + " horas";
    }

    return { thumb, title, user, url, time };
  };

  render() {
    const { thumb, title, user, url, time } = this.formatData();

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="post-item-wrapper"
      >
        <article className="post-item">
          {thumb ? (
            <img className="post-item__thumb" src={thumb} alt={title} />
          ) : (
            ""
          )}

          <div className="post-item__content">
            <h1 className="post-item__title">{title}</h1>
            <p className="post-item__meta">
              <span className="post-item__time">Enviado há {time}</span> por{" "}
              <span className="post-item__user">{user}</span>
            </p>
            <p className="post-item__url">{url}</p>
          </div>
        </article>
      </a>
    );
  }
}

export default PostItem;