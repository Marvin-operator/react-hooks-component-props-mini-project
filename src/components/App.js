import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  return (
    <div>
      <Header name="My Blog" />
      <About 
        image="https://via.placeholder.com/215" 
        about="Welcome to my blog! Here you will find various articles on React and more."
      />
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;

