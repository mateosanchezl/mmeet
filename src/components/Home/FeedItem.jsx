import React from "react";

const FeedItem = ({ title, author, timestamp, content }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">
            Posted by {author} · {timestamp}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedItem;
