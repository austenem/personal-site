import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-07-09T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const BooksRead = () => {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const now = new Date();
  const msInWeek = 1000 * 60 * 60 * 24 * 7;
  const weeksPassed = Math.floor((now - startOfYear) / msInWeek);

  return <>{weeksPassed}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Boston, MA',
  },
  {
    key: 'states',
    label: 'States visited',
    value: 23,
  },
  {
    key: 'mbta',
    label: 'MBTA train stops visited',
    value: 71,
  },
  {
    key: 'books',
    label: 'Books read so far this year',
    value: <BooksRead />,
  },
  {
    key: 'plants',
    label: 'Surviving houseplants',
    value: 13,
  },
];

export default data;
