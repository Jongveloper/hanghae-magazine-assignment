import React from "react";
import styled from "styled-components";

const Image = (props) => {
  //defaultProps를 설정해준 값 가져오기(2)
  const { shape, src, size } = props;
  // 스타일을 담당하는 객체를 만든다.(4)
  const styles = {
    src: src,
    size: size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }
  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

//defaultProps(꼭 필요한 값) 만들기 (1)
Image.defaultProps = {
  shape: "circle",
  src: "https://cdn.pixabay.com/photo/2016/04/05/11/04/nepal-1309205_960_720.jpg",
  size: 36,
};
//스타일 컴포넌트 만들기 (3)
const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;
const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-repeat: no-repeat; background-position: center; background-size: cover;
  object-fit: cover;

`;
//이미지를 동그랗게 넣기위해 픽셀값(사이즈) 가 다 같아야하기 때문에 css변수 활용
const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
