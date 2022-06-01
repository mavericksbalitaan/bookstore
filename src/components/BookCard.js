import React from 'react';
import '../scss/BookCard.scss';

function BookCard() {
  return (
    <section className="bookCardWrapper">
      <div className="bookCardContainer">
        <span className="genre">Action</span>
        <span className="title">The Hunger Games</span>
        <span className="author">Suzanne Collins</span>
        <div className="options">
          <span className="comments">Comments</span>
          {' '}
          |
          <span className="remove">Remove</span>
          {' '}
          |
          <span className="edit">Edit</span>
        </div>
      </div>
      <div className="progressContainer">
        <div className="progressCircle">
          <div className="outer">
            <div className="inner" />
          </div>
          <svg
            className="svgCircle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="80px"
            height="80px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="#307bbe" />
                <stop offset="100%" stopColor="#379cf6" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="40" r="37.5" strokeLinecap="round" />
          </svg>
        </div>

        <div className="progressPercent">
          <span className="percentComplete">
            64%
          </span>
          <span className="completed">
            Completed
          </span>
        </div>
      </div>
      <div className="line2" />
      <div className="progressStatus">
        <span className="currentChapter">
          Current Chapter
        </span>
        <span className="currentLesson">
          Chapter 17
        </span>
        <span className="updateProgress">
          Update progress
        </span>
      </div>
    </section>
  );
}

export default BookCard;
