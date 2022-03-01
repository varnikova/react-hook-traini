import React from 'react';
import ListItem from './ListItem';

export default function List() {
  const mockData = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jane',
    },
    {
      id: 3,
      name: 'Jolene',
    },
    {
      id: 4,
      name: 'Joanne',
    },
  ];

  return mockData.map((item) => <ListItem name={item.name} key={item.id} />);
}
