import * as React from "react";
import styled from "styled-components";

const VectorIcon = styled.img`
  position: absolute;
  height: 100.45%;
  width: 100%;
  top: -0.25%;
  right: -0.11%;
  bottom: -0.2%;
  left: 0.11%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 102.14%;
  width: 103.58%;
  top: -1.04%;
  right: -1.77%;
  bottom: -1.11%;
  left: -1.81%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 1.45%;
  width: 2.42%;
  top: 29.23%;
  right: 62.66%;
  bottom: 69.32%;
  left: 34.91%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FrameChild = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 24.42%;
  right: 55.86%;
  bottom: 75.25%;
  left: 43.45%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const FrameItem = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 34.55%;
  right: 60.93%;
  bottom: 65.11%;
  left: 38.39%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const FrameInner = styled.div`
  position: absolute;
  height: 0.34%;
  width: 0.69%;
  top: 38.89%;
  right: 55.68%;
  bottom: 60.77%;
  left: 43.63%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const EllipseDiv = styled.div`
  position: absolute;
  height: 0.2%;
  width: 0.4%;
  top: 37.82%;
  right: 42.73%;
  bottom: 61.98%;
  left: 56.87%;
  border-radius: 50%;
  background-color: var(--white);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const FrameChild1 = styled.div`
  position: absolute;
  height: 0.55%;
  width: 1.12%;
  top: 25.77%;
  right: 41.5%;
  bottom: 73.67%;
  left: 57.38%;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen-100);
  transform: rotate(5.63deg);
  transform-origin: 0 0;
`;
const FrameChild2 = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 58.99%;
  right: 98.99%;
  bottom: 37.93%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const FrameChild3 = styled.div`
  position: absolute;
  height: 4.28%;
  width: 1.01%;
  top: 23.11%;
  right: -1.01%;
  bottom: 72.6%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const GroupIcon = styled.img`
  position: relative;
  width: 76.5px;
  height: 67.5px;
`;
const IsNowHere = styled.p`
  margin: 0;
`;
const IsNowHereContainer = styled.div`
  position: relative;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 144.4px;
  left: 49.7px;
  width: 177px;
  height: 190.6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-23xl);
`;
const VectorParentRoot = styled.div`
  position: relative;
  width: 276.4px;
  height: 560.3px;
  text-align: center;
  font-size: var(--font-size-14xl-5);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const ContainerCard = () => {
  return (
    <VectorParentRoot>
      <VectorIcon alt="" src="/vector.svg" />
      <VectorIcon1 alt="" src="/vector2.svg" />
      <VectorIcon2 alt="" src="/vector3.svg" />
      <FrameChild />
      <FrameItem />
      <FrameInner />
      <EllipseDiv />
      <FrameChild1 />
      <FrameChild2 />
      <FrameChild3 />
      <GroupParent>
        <GroupIcon alt="" src="/group-626832.svg" />
        <IsNowHereContainer>
          <IsNowHere>{`Is now here, `}</IsNowHere>
          <IsNowHere>for you.</IsNowHere>
        </IsNowHereContainer>
      </GroupParent>
    </VectorParentRoot>
  );
};

export default ContainerCard;
