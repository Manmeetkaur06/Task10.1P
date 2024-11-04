import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

// Generate a list of articles with random data
const articles = Array.from({ length: 3 }, (_, index) => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  author: faker.name.firstName(),
  rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
  image: `https://picsum.photos/200/150?random=${index + 1}`, // Unique image for each article
}));

const FeaturedArticles = () => (
  // Display articles in a 3-column card layout
  <Card.Group itemsPerRow={3}>
    {articles.map((article, index) => (
      <Card key={index}>
        {/* Article image */}
        <Image src={article.image} />
        
        {/* Article content */}
        <Card.Content>
          <Card.Header>{article.title}</Card.Header>  {/* Article title */}
          <Card.Meta>By {article.author}</Card.Meta>   {/* Author name */}
          <Card.Description>{article.description}</Card.Description>  {/* Short description */}
        </Card.Content>
        
        {/* Extra content with rating */}
        <Card.Content extra>
          <Rating icon="star" defaultRating={article.rating} maxRating={5} disabled />
          <span style={{ marginLeft: '10px' }}>{article.rating} stars</span>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default FeaturedArticles;
