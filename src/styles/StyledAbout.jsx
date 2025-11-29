import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100dvh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
  align-items: center;
  background: linear-gradient(180deg, #000 0%, #032f61 50.48%, #000 100%);
  padding-bottom: 335px;
`;

export const Back = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;

  img {
    margin-top: 80px;
  }
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  padding: 28px 140px 27px 140px;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  z-index: 10;
  flex-direction: row;
  position: fixed;
  backdrop-filter: blur(10px); /* 선택 사항: 반투명 배경에 흐림 효과 */
  box-sizing: border-box; /* 패딩 포함 */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const CYC = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  img {
    width: 25px;
    height: 25px;
  }

  div {
    color: #fff;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.5px;
  }
`;

export const UNDP = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
  }

  div {
    color: #fff;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.5px;
  }
`;

export const Comp = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Ele = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;

  img {
    width: 18px;
    height: 18px;
    aspect-ratio: 1/1;
  }

  div {
    color: #fff;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  margin-top: 208px;
  line-height: normal;
  background: linear-gradient(
    90deg,
    rgba(149, 255, 160, 0.8) 0%,
    rgba(132, 180, 215, 0.9) 48%,
    #0063ac 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 3;
`;

export const Det_70 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 140% */
  margin-top: 70px;
  z-index: 3;
`;

export const Det_40 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 140% */
  margin-top: 40px;
  z-index: 3;
`;

export const Semi = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 3px;
  margin-top: 200px;
  z-index: 3;
`;

export const Det_99 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 140% */
  margin-top: 99px;
  z-index: 3;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const Box = styled.div`
  display: flex;
  width: 307px;
  height: 122px;
  padding: 26px 17px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: #213370;
  box-shadow: 2px 3px 4px 0 rgba(255, 255, 255, 0.25) inset,
    3px 3px 4px 0 rgba(255, 255, 255, 0.1);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 140% */
  z-index: 3;
`;

export const B1 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 140% */
  margin-top: 110px;
  z-index: 3;
`;

export const B2 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 140% */
  margin-top: 50px;
  z-index: 3;
  margin-bottom: 44px;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 60px;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Prof = styled.div`
  width: 372px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 372px;
    height: 395px;
    border-radius: 30px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat;
    object-fit: cover;
  }

  div {
    color: #fff;
    text-align: center;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 1.5px;
  }
`;
