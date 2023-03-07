import styled from 'styled-components';

export const Btn = styled.button`
  width: 196px;
  height: 50px;
  background-color: #ebd8ff;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  &:hover,
  &:focus {
    background-color: #a572da;
    color: white;
  }
  cursor: pointer;
`;

export const BtnActive = styled.button`
  width: 196px;
  height: 50px;
  background-color: #5cd3a8;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #373737;

  &:hover,
  &:focus {
    background-color: #2a936d;
    color: white;
  }
`;
