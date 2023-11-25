import * as React from "react";
import Header from "../components/top-nav";
import TradeHeroContainer from "../components/trade-hero-container";
import DynamicComponent from "../components/frame-1000005520";
import styled from "styled-components";
import DerivativeTradingCard from "../components/derivative-trading-card";
import ContainerCard from "../components/container-card";
import TradeMorePayLessSection from "../components/frame-1000005529";
import MarketExplorerSection from "../components/frame-1000005535";
import Container from "../components/frame-16";
import CryptoCard from "../components/frame-1000005684";
import SectionCardForm from "../components/frame-1000005527";
import SectionCard1 from "../components/frame-1000005531";
import SectionCard from "../components/frame-1000005536";
import SectionCardFormFilter1 from "../components/frame-10000055271";
import EarnMoneySection from "../components/frame-10000055361";
import TradeTogetherSection from "../components/frame-10000055362";
import VisionariesSection from "../components/frame-1000005537";
import FormContainer1 from "../components/footer";

const FrameChild = styled.img`
  position: absolute;
  height: 102.2%;
  width: 103.44%;
  top: -1.09%;
  right: -1.81%;
  bottom: -1.11%;
  left: -1.63%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const FrameItem = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 59.02%;
  right: 98.99%;
  bottom: 37.89%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const FrameInner = styled.div`
  position: absolute;
  height: 4.29%;
  width: 1.01%;
  top: 23.13%;
  right: -1.01%;
  bottom: 72.59%;
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
  width: 130px;
  height: 186px;
`;
const OneApp = styled.p`
  margin: 0;
`;
const OneAppEndlessContainer = styled.div`
  position: relative;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 117.3px;
  left: 53.6px;
  width: 170px;
  height: 318.1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 11px;
`;
const GroupParent = styled.div`
  position: relative;
  width: 276.4px;
  height: 560px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px 240px;
  gap: var(--gap-101xl);
`;
const Unlock = styled.span``;
const Span = styled.span`
  color: #d4f938;
`;
const NewFrontiers = styled.span`
  color: var(--white);
`;
const UnlockNewFrontiersContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  display: inline-block;
  width: 846px;
`;
const AreYouA = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.1px;
`;
const UnlockNewFrontiersParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const FrameWrapper = styled.div`
  width: 1130px;
  height: 510px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 34.009765625px 54px;
  box-sizing: border-box;
  background-image: url("/frame-1000003839@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  mix-blend-mode: overlay;
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-131xl) 0px;
  gap: var(--gap-45xl);
  font-size: var(--font-size-53xl);
  color: var(--electric-green-primary);
`;
const GetStartedNow = styled.b`
  position: absolute;
  bottom: 1069.6px;
  left: 0px;
  letter-spacing: -2.78px;
  background: linear-gradient(176.64deg, #fff, rgba(255, 255, 255, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const FrameChild1 = styled.img`
  position: absolute;
  bottom: -7.7px;
  left: 225.3px;
  width: 557.3px;
  height: 1124.4px;
`;
const StartTrading = styled.b`
  position: relative;
`;
const Cta = styled.div`
  background: linear-gradient(
    268.92deg,
    #d4f938 43.75%,
    rgba(50, 216, 117, 0.96)
  );
  width: 866.2px;
  height: 135px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11.13222599029541px 33.39667892456055px;
  box-sizing: border-box;
`;
const CtaWrapper = styled.div`
  position: absolute;
  bottom: 58.5px;
  left: 67px;
  background-color: rgba(67, 212, 107, 0.6);
  filter: blur(51.49px);
  width: 876px;
  height: 142.6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.3916015625px 0px;
  box-sizing: border-box;
  font-size: 38.27px;
`;
const GetStartedNowParent = styled.div`
  position: relative;
  width: 1011px;
  height: 1228.6px;
`;
const LandingPageInner = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-141xl) 0px;
  text-align: left;
  font-size: 132.2px;
  color: var(--color-black);
`;
const LandingPageRoot = styled.a`
  text-decoration: none;
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #58f28a, #000);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-14xl-5);
  color: var(--white);
  font-family: var(--mobile-caption-1-medium);
`;

const LandingPage = () => {
  return (
    <LandingPageRoot>
      <Header />
      <TradeHeroContainer />
      <DynamicComponent />
      <FrameParent>
        <GroupParent>
          <FrameChild alt="" src="/group-1000003808.svg" />
          <FrameItem />
          <FrameInner />
          <GroupContainer>
            <GroupIcon alt="" src="/group-18145967.svg" />
            <OneAppEndlessContainer>
              <OneApp>One App.</OneApp>
              <OneApp>{`Endless `}</OneApp>
              <OneApp>Possibilities</OneApp>
            </OneAppEndlessContainer>
          </GroupContainer>
        </GroupParent>
        <DerivativeTradingCard />
        <ContainerCard />
      </FrameParent>
      <TradeMorePayLessSection />
      <MarketExplorerSection />
      <FrameGroup>
        <UnlockNewFrontiersParent>
          <UnlockNewFrontiersContainer>
            <Unlock>Unlock</Unlock>
            <Span>{` `}</Span>
            <NewFrontiers>New Frontiers.</NewFrontiers>
          </UnlockNewFrontiersContainer>
          <AreYouA>
            Are you a stock trader looking for new opportunities to make money?
            We got you covered!
          </AreYouA>
        </UnlockNewFrontiersParent>
        <Container />
        <FrameWrapper>
          <CryptoCard />
        </FrameWrapper>
      </FrameGroup>
      <SectionCardForm />
      <SectionCard1 />
      <SectionCard />
      <SectionCardFormFilter1 />
      <EarnMoneySection />
      <TradeTogetherSection />
      <VisionariesSection />
      <LandingPageInner>
        <GetStartedNowParent>
          <GetStartedNow>Get started now.</GetStartedNow>
          <FrameChild1 alt="" src="/group-1000003804.svg" />
          <CtaWrapper>
            <Cta>
              <StartTrading>Start Trading!</StartTrading>
            </Cta>
          </CtaWrapper>
        </GetStartedNowParent>
      </LandingPageInner>
      <FormContainer1 />
    </LandingPageRoot>
  );
};

export default LandingPage;
