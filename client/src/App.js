import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import ArticleCard from './Components/ArticleCard';
import Pagination from './Components/Pagination';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const categories = ['All', 'Technology', 'Business', 'Sports', 'Health'];
  const articlesPerPage = 10; // articles required

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/news');
        const fetchedArticles = response.data || []; 
        setArticles(fetchedArticles);

        const pages = Math.ceil(fetchedArticles.length / articlesPerPage);
        setTotalPages(pages);
      } catch (error) {
        console.error('Error fetching news:', error);
        setArticles([]);  //error aane par empty array
        setTotalPages(1); 
      }
    };
    fetchNews();
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearchTerm = (article.title && article.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
                              (article.description && article.description.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearchTerm;
  });

  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-r from-teal-900 via-gray-800 to-gray-900 text-white' : 'bg-gradient-to-r from-gray-100 via-blue-50 to-gray-50 text-gray-900'} p-6`}>
      <Navbar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className='mt-4'>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="articles grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedArticles.length > 0 ? (
          paginatedArticles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}

export default App;