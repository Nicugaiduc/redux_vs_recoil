import React from 'react';
import {
    Grid,
    Card,
    Text,
    Image
} from "@mantine/core"

interface FoodCardProps {
    name: string;
    image: string;
}

const FoodCard = ({name, image}: FoodCardProps) => {
  return (
    <Grid.Col span={6}>
        <Card
      shadow="sm"
      p="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src={image}
          height={160}
          alt="No way!"
        />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        {name}
      </Text>
    </Card>
    </Grid.Col>
  )
}

export default FoodCard