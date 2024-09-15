// src/components/FeaturedTutorials.js
import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';


const tutorials = Array(3).fill(null).map(() => ({
  title: faker.lorem.words(),
  description: faker.lorem.sentence(),
  username: faker.internet.userName(),
  rating: Math.floor(Math.random() * 5) + 1,
  image: `https://picsum.photos/200/150`,
}));

const FeaturedTutorials = () => (
  <Card.Group itemsPerRow={3}>
    {tutorials.map((tutorial, index) => (
      <Card key={index}>
        <Image src={tutorial.image} />
        <Card.Content>
          <Card.Header>{tutorial.title}</Card.Header>
          <Card.Meta>By {tutorial.username}</Card.Meta>
          <Card.Description>{tutorial.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Rating icon="star" defaultRating={tutorial.rating} maxRating={5} disabled />
          <span style={{ marginLeft: '10px' }}>{tutorial.rating} stars</span>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default FeaturedTutorials;
