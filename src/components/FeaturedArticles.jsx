// src/components/FeaturedArticles.js
import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import './FeaturedArticles.css';

const articles = Array(3).fill(null).map(() => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  author: faker.name.firstName(),
  rating: Math.floor(Math.random() * 5) + 1,
  image: `https://picsum.photos/200/150`,
}));

const FeaturedArticles = () => (
  <Card.Group itemsPerRow={3}>
    {articles.map((article, index) => (
      <Card key={index}>
        <Image src={article.image} />
        <Card.Content>
          <Card.Header>{article.title}</Card.Header>
          <Card.Meta>By {article.author}</Card.Meta>
          <Card.Description>{article.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Rating icon="star" defaultRating={article.rating} maxRating={5} disabled />
          <span style={{ marginLeft: '10px' }}>{article.rating} stars</span>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default FeaturedArticles;
