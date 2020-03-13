import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <nav className="App-navigation">
        navigation
      </nav>
      <aside className="App-sidebar">
        aside
      </aside>    
      <section className="App-section">
        section
        <article className="App-article">
          article
        </article>
        <article className="App-article">
          article
        </article>
      </section>
      <footer className="App-footer">
        footer
      </footer>
    </div>
  );
}

export default App;
