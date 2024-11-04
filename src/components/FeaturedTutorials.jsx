import React from 'react';
import { Card, Image, Rating } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';

// Generate a list of tutorials with random data
const tutorials = Array.from({ length: 3 }, (_, index) => ({
  title: faker.lorem.words(), // Random tutorial title
  description: faker.lorem.sentence(), // Short description
  username: faker.internet.userName(), // Random username
  rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
  image: `https://picsum.photos/200/150?random=${index + 4}`, // Unique image for each tutorial
}));

const FeaturedTutorials = () => (
  // Display tutorials in a 3-column card layout
  <Card.Group itemsPerRow={3}>
    {tutorials.map((tutorial, index) => (
      <Card key={index}>
        {/* Tutorial image */}
        <Image src={tutorial.image} />
        
        {/* Tutorial content */}
        <Card.Content>
          <Card.Header>{tutorial.title}</Card.Header>  {/* Tutorial title */}
          <Card.Meta>By {tutorial.username}</Card.Meta>  {/* Username */}
          <Card.Description>{tutorial.description}</Card.Description>  {/* Short description */}
        </Card.Content>
        
        {/* Extra content with rating */}
        <Card.Content extra>
          <Rating icon="star" defaultRating={tutorial.rating} maxRating={5} disabled />
          <span style={{ marginLeft: '10px' }}>{tutorial.rating} stars</span>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

export default FeaturedTutorials;
