import React from 'react';
import { connect } from 'react-redux';

const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
};
const errorMessage = {
  color: 'red'
};

let NewsItem = ({ article }) => {
  console.log('news', article);
  // console.log('selected', article[0].name);

  //return article ? (
  // <article style={articleStyle}>
  //   {article.error && <h2 style={errorMessage}>{article.error}</h2>}
  //   {article.title && (
  //     <div>
  //       <h1>{article.title}</h1>
  //       <img style={imgStyle} src={article.urlToImage} alt="" />
  //       <h2>{article.description}</h2>
  //     </div>
  //   )}
  // </article>
  //) : null;
  // return article.map(item => <h1>{item.name}</h1>);
  return article ? (
    <div>
      {article.map(item => {
        return <h1>{item.name}</h1>;
      })}
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  article: state.news
});

NewsItem = connect(mapStateToProps, null)(NewsItem);

export default NewsItem;
