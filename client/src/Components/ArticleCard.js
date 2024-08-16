import React from 'react';

function ArticleCard({ article }) {
  return (
    <div className="article bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{article.title}</h2>
      <p className="text-gray-600 mb-4">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
      >
        Read more &rarr;
      </a>
    </div>
  );
}

export default ArticleCard;