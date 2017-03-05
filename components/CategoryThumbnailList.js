// @flow

import React from 'react';
import gql from 'graphql-tag';

const CategoryThumbnailList = ({ categories }) => (
  <div className="container">
    <h1 style={{ textAlign: 'center' }}> {'ค้นหาตามหมวดหมู่'} </h1>
    <div className="category-container" >
      {
          categories ? categories.map(category =>
          (<div key={category._id} className="category-item" >
            <div
              style={{
                border: '1px #eeeeee solid',
                backgroundColor: '#f9f9f9',
                backgroundImage: `url(${category.thumbnailImage ? category.thumbnailImage.secure_url : null})`,
                width: 200,
                height: 150 }}
            />
            <div className="category-name">{category.name}</div>
          </div>)) : null
      }
      <style jsx>{`
                .container {
                    display:flex;
                    justify-content: center;
                }
                .category-container {
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                }
                .category-item {
                    margin: 5px;
                    cursor: pointer;
                    transition: 0.111s linear all;
                    transform: scale(.95);
                }
                .category-item:hover {
                    transform-origin: center center;
                    transform: scale(1);
                }
                .category-name {
                    margin: 10px 0;
                    text-align:center;
                    position:relative;
                    font-size: 18px;
                }
                .category-name:after{
                    position:absolute;
                    content: " ";
                    border-bottom: black 4px solid;
                    width: 50px;
                    bottom:0;
                    left: 50%;
                    transform: translate(-50%, 15px);
                }
    `}</style>
    </div>
  </div>
  );

CategoryThumbnailList.fragments = {
  categories: gql`
        fragment CategoryThumbnailList on Category {
            _id
            name
            key
            thumbnailImage {
                secure_url
            }
        }
    `,
};
export default CategoryThumbnailList;