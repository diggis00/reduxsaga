import React from 'react';
import Button from './containers/Button';
import Loading from './containers/Loading';
import NewsItem from './containers/NewsItem';
function App() {
  return (
    <div>
      <Button />
      <Loading />
      <NewsItem />
    </div>
  );
}

export default App;
