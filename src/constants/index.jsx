import { BedDoubleIcon, Handshake, Headset, SofaIcon } from 'lucide-react';

const K = {
  NAVLINKS: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about-us',
    },
    {
      name: 'Collection',
      path: '/collection',
    },
    {
      name: 'Contact',
      path: '/contact-us',
    },
  ],

  SERVICES: [
    {
      title: 'Amazing Deals',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: <Handshake />,
      bgColor: '#00717A',
      iconBg: '#CB9696',
    },
    {
      title: 'Amazing Deals',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: <SofaIcon />,
      bgColor: '#00d1d3',
      iconBg: '#00545F',
    },
    {
      title: 'Amazing Deals',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: <BedDoubleIcon />,
      bgColor: '#00717A',
      iconBg: '#00545F',
    },
    {
      title: 'Amazing Deals',
      description:
        'Far far away, behind the word mountains, far from the countries Vokalia.',
      icon: <Headset />,
      bgColor: '#00d1d3',
      iconBg: '#00545F',
    },
  ],
};

export default K;
