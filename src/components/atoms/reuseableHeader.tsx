import styled from 'styled-components';
import Image  from './image';
import { useScreenResolution } from '@/lib/extentions/hook/useScreenResolution';
import CoverImage from "/public/assets/image/cover.jpg";




interface ReusableHeaderProps {
    text: string; // Text will be a string

  }
// Reusable Header Component
const ReusableHeader: React.FC<ReusableHeaderProps> = ({ text }) => {
  const { isMobile } = useScreenResolution();

  return (
    <HeaderWrapper style={{ height: "fit-content" }}>
      <Image src={CoverImage} alt="" height={isMobile ? 128 : 250} />
      <Overlay style={{ height: isMobile ? "128px" : "250px" }} />
      <HeaderText>{text}</HeaderText>
    </HeaderWrapper>
  );
};

export default ReusableHeader;

// Styled components
const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;

  & img {
    width: 100%;
    object-fit: cover;
    height: 250px;
  }
`;

const HeaderText = styled.h2`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #edfff7;
  text-transform: uppercase;
  width: max-content;
  text-align: center;
  font-weight: 700;
  font-size: 48px;
  padding: 0 1rem;
  line-height: 1.5em;
  text-shadow: 0px 4px 79px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media screen and (max-width: 900px) {
    font-size: 45px;
    width: 100%;
    background: transparent;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // background: linear-gradient(90deg, rgb(0 0 0 / 10%) 45%, rgb(0 0 0 / 22%) 55%);
  background:  linear-gradient(90deg, rgb(0 0 0 / 67%) 45%, rgb(0 0 0 / 53%) 55%);

  @media screen and (max-width: 900px) {
    background: #06062a94;
  }
`;
