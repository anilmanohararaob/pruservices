import images from '../assets';

export const store = [
  {
    key: '0',
    type: 'FRIES',
    price: '4',
    images: [images.image1, images.image2, images.image3],
  },
  {
    key: '1',
    type: 'LATTE',
    price: '3',
    images: [images.coke1, images.coke2, images.burger2],
  },
  {
    key: '2',
    type: 'BURGER',
    price: '6',
    images: [images.burger1, images.burger2, images.burger3],
  },
];

export const starArray = [
  {key: '1', x: 30, y: 60, value: images.star1},
  {key: '2', x: 170, y: 60, value: images.star2},
  {key: '3', x: 50, y: 120, value: images.star3},
];
