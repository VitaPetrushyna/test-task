import { Btn } from './Button.styled';

const Button = ({ countFollower }) => {
  return (
    <>
      <Btn
        type="button"
        onClick={() => {
          countFollower();
        }}
      >
        FOLLOW
      </Btn>
    </>
  );
};

export default Button;
