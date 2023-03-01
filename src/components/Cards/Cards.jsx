import {
  Card,
  PictureSigns,
  Line,
  AvatarPhoto,
  LogoIcon,
} from './Cards.styled';

import Button from '../Button/Button';

import Picture from '../../img/picture1.png';
import Avatar from '../../img/boy-photo.png';
import Rectangle from '../../img/Rectangle1.png';
import Logo from '../../img/Logo1.png';

// import { ReactComponent as Logo } from '../../img/Logo.svg';
// import { ReactComponent as Rectangle } from '../../img/Rectangle.svg';

const Cards = () => {
  return (
    <>
      <Card>
        <LogoIcon src={Logo} alt="logo"></LogoIcon>
        <PictureSigns src={Picture} alt="signs"></PictureSigns>
        <Line src={Rectangle} alt="rectangle"></Line>
        <AvatarPhoto src={Avatar} alt="avatar"></AvatarPhoto>
        <Button />
      </Card>
    </>
  );
};

export default Cards;
