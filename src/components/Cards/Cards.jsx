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

// import { ReactComponent as Logo } from '../../img/Logo.svg';
// import { ReactComponent as Rectangle } from '../../img/Rectangle.svg';

const Cards = () => {
  const [follower, setFollower] = useState(() => {
    return JSON.parse(localStorage.getItem('follower')) ?? 100500;
  });

  useEffect(() => {
    localStorage.setItem('follower', JSON.stringify(follower));
  }, [follower]);

  // const [follower, setFollower] = useState(100500);
  const [tweet, setTweet] = useState(777);

  const countFollower = () => {
    setFollower(state => state + 1);
  };

  const reducesFollower = () => {
    setFollower(state => state - 1);
  };

  return (
    <>
      <Card>
        <LogoIcon src={Logo} alt="logo"></LogoIcon>
        <PictureSigns src={Picture} alt="signs"></PictureSigns>
        <Line src={Rectangle} alt="rectangle"></Line>
        <AvatarPhoto src={Avatar} alt="avatar"></AvatarPhoto>
        <Statistics follower={follower} tweet={tweet} />
        {follower > 100500 ? (
          <ButtonActive reducesFollower={reducesFollower} />
        ) : (
          <Button countFollower={countFollower} />
        )}
      </Card>
    </>
  );
};

export default Cards;
