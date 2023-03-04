import { useState, useEffect } from 'react';

import {
  Card,
  PictureSigns,
  Line,
  AvatarPhoto,
  LogoIcon,
} from './Cards.styled';

import Button from '../Button/Button';
import ButtonActive from '../Button/ButtonActive';
import Statistics from '../Statistics/Statistics';

import Picture from '../../img/picture1.png';
import Avatar from '../../img/boy-photo.png';
import Rectangle from '../../img/Rectangle1.png';
import Logo from '../../img/Logo1.png';

const Cards = () => {
  const number = 100500;
  const result = (number / 1000).toFixed(3);

  const [follower, setFollower] = useState(() => {
    return JSON.parse(localStorage.getItem('follower')) ?? result;
  });

  useEffect(() => {
    localStorage.setItem('follower', JSON.stringify(follower));
  }, [follower]);

  const countFollower = () => {
    setFollower(state => parseFloat(state) + 0.001);
  };

  const reducesFollower = () => {
    setFollower(result);
  };

  return (
    <>
      <Card>
        <LogoIcon src={Logo} alt="logo"></LogoIcon>
        <PictureSigns src={Picture} alt="signs"></PictureSigns>
        <Line src={Rectangle} alt="rectangle"></Line>
        <AvatarPhoto src={Avatar} alt="avatar"></AvatarPhoto>
        <Statistics follower={follower} />
        {follower > result ? (
          <ButtonActive reducesFollower={reducesFollower} />
        ) : (
          <Button countFollower={countFollower} />
        )}
      </Card>
    </>
  );
};

export default Cards;
