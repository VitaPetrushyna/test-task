import { BtnActive } from './Button.styled';

const ButtonActive = ({ reducesFollower }) => {
  return (
    <>
      <BtnActive
        type="button"
        onClick={() => {
          reducesFollower();
        }}
      >
        FOLLOWING
      </BtnActive>
    </>
  );
};

export default ButtonActive;
