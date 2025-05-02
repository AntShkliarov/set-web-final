import { IPlant } from '../types/plant';

export const plantData: IPlant[] = [
  {
    id: '1',
    name: 'Snake Plant',
    imageUrl: 'https://images.unsplash.com/photo-1593482892490-9e0fc7664945?auto=format&fit=crop&w=600',
    environment: {
      indoor: true,
      outdoor: false
    },
    description: 'The Snake Plant is one of the most popular and hardy houseplants. Its stiff, sword-like leaves range from 6 inches to 8 feet tall.',
    growingInstructions: 'Thrives in bright light but can tolerate low light. Let soil dry between waterings. Tolerates neglect well.'
  },
  {
    id: '2',
    name: 'Peace Lily',
    imageUrl: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600',
    environment: {
      indoor: true,
      outdoor: false
    },
    description: 'The Peace Lily is a popular indoor plant known for its beautiful white flowers and ability to purify air.',
    growingInstructions: 'Prefers shade and moderate watering. Keep soil consistently moist but not soggy. Mist leaves occasionally.'
  },
  {
    id: '3',
    name: 'Monstera Deliciosa',
    // Intentionally breaking this URL to trigger the placeholder image
    imageUrl: 'https://images.unsplash.com/photo-broken-url-to-trigger-placeholder',
    environment: {
      indoor: true,
      outdoor: true
    },
    description: 'Monstera Deliciosa is famous for its large, glossy, perforated leaves that have earned it the nickname "Swiss Cheese Plant."',
    growingInstructions: 'Prefers bright, indirect light. Water when top inch of soil feels dry. Enjoys higher humidity.'
  },
  {
    id: '4',
    name: 'Aloe Vera',
    imageUrl: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600',
    environment: {
      indoor: true,
      outdoor: true
    },
    description: 'Aloe Vera is a succulent plant known for its medicinal properties, particularly for treating burns and skin conditions.',
    growingInstructions: 'Needs bright, direct sunlight. Water thoroughly but infrequently, allowing soil to dry completely between waterings.'
  },
  {
    id: '5',
    name: 'Basil',
    // Intentionally breaking this URL to trigger the placeholder image
    imageUrl: 'https://non-existent-image-source.com/basil.jpg',
    environment: {
      indoor: true,
      outdoor: true
    },
    description: 'Basil is a culinary herb known for its sweet, slightly peppery flavor, commonly used in Italian and Thai cuisine.',
    growingInstructions: 'Requires 6-8 hours of sunlight daily. Keep soil consistently moist. Harvest regularly to encourage bushier growth.'
  },
  {
    id: '6',
    name: 'Sunflower',
    imageUrl: 'https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=600',
    environment: {
      indoor: false,
      outdoor: true
    },
    description: 'Sunflowers are tall, cheerful plants known for their large flower heads that follow the sun throughout the day.',
    growingInstructions: 'Plant in full sun after danger of frost has passed. Space seeds according to variety height. Water deeply but infrequently.'
  },
  {
    id: '7',
    name: 'Spider Plant',
    imageUrl: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600',
    environment: {
      indoor: true,
      outdoor: false
    },
    description: 'The Spider Plant is a popular houseplant known for its arching leaves with white stripes and small plantlets that hang down from the mother plant.',
    growingInstructions: 'Thrives in bright, indirect light. Water when the top inch of soil is dry. Enjoys average home humidity and temperatures.'
  },
  {
    id: '8',
    name: 'Lavender',
    // Intentionally breaking this URL to trigger the placeholder image
    imageUrl: 'https://invalid-domain-for-testing.com/lavender.jpg',
    environment: {
      indoor: false,
      outdoor: true
    },
    description: 'Lavender is a fragrant herb with purple flowers that is popular for its calming scent and is used in everything from culinary dishes to essential oils.',
    growingInstructions: 'Plant in full sun with well-draining soil. Allow soil to dry between waterings. Prune after flowering to maintain shape.'
  }
];
