import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 380px;
  height: 460px;
  padding: 20px 20px 36px 20px;
  margin: 40px auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const PictureSigns = styled.img``;

export const Line = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
`;

export const AvatarPhoto = styled.img`
  position: absolute;
  top: 42%;
  left: 38%;

  z-index: 1;
`;

export const LogoIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;
