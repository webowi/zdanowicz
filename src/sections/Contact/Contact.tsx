import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Button } from "../../components/atoms/Button/Button";
import { maxDeviceSize } from "../../utils/deviceSize";
import { MdEmail, MdPhone, MdCheckCircle } from "react-icons/md";

interface ContactProps {
  $isHighlighted: boolean;
}

export const Contact: React.FC<ContactProps> = ({ $isHighlighted = false }) => {
  const email = import.meta.env.VITE_EMAIL as string | undefined;
  const phone = import.meta.env.VITE_PHONE_NUMBER as string | undefined;

  return (
    <Section $isHighlighted={$isHighlighted} id="contact" aria-label="Kontakt">
      <Content>
        <Card>
          <Badge>
            <MdCheckCircle size={18} />
            Odpowiadamy szybko i konkretnie
          </Badge>

          <Title>Skontaktuj się z nami</Title>
          <Lead>
            Masz pytania? Napisz lub zadzwoń — doradzimy i przygotujemy{" "}
            <strong>darmową wycenę</strong>.
          </Lead>

          <Buttons>
            {email && (
              <Button href={`mailto:${email}`}>
                <BtnInner>
                  <MdEmail size={20} />
                  <span>{email}</span>
                </BtnInner>
              </Button>
            )}

            {phone && (
              <Button href={`tel:${phone}`} variant="secondary">
                <BtnInner>
                  <MdPhone size={20} />
                  <span>{phone}</span>
                </BtnInner>
              </Button>
            )}
          </Buttons>

          <Hint>Darmowa wycena • bez zobowiązań • szybka odpowiedź</Hint>
        </Card>
      </Content>
    </Section>
  );
};

const Section = styled.section<ContactProps>`
  position: relative;
  background: ${({ $isHighlighted }) =>
    $isHighlighted ? "#eef0f3" : "#f6f7f9"};
  padding: 5.5rem 2rem 6rem;
  display: flex;
  justify-content: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: min(1200px, calc(100% - 4rem));
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.14),
      rgba(0, 0, 0, 0)
    );
    opacity: 0.55;
    pointer-events: none;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  @media ${maxDeviceSize.tablet} {
    padding: 3.5rem 1rem 4.5rem;

    &::before,
    &::after {
      width: calc(100% - 2rem);
    }
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: min(860px, 100%);
  border-radius: 22px;
  padding: 28px 22px;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);

  box-shadow:
    0 22px 50px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);

  text-align: center;

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    pointer-events: none;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1) 35%,
      rgba(255, 255, 255, 0) 62%
    );
    opacity: 0.7;
  }

  @media ${maxDeviceSize.phone} {
    padding: 22px 16px;
    border-radius: 18px;
  }
`;

const Badge = styled.div`
  width: fit-content;
  margin: 0 auto 14px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 8px 12px;
  border-radius: 999px;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};

  font-weight: 900;
  font-size: 0.92rem;

  svg {
    color: ${colors.orange};
  }
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 2.2rem;
  font-weight: 900;
  color: #121316;

  @media ${maxDeviceSize.phone} {
    font-size: 1.8rem;
  }
`;

const Lead = styled.p`
  margin: 0 auto 18px;
  max-width: 640px;

  font-size: 1.12rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.72);

  strong {
    color: #111;
    font-weight: 900;
  }

  @media ${maxDeviceSize.phone} {
    font-size: 1.02rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;

    a {
      width: 100%;
      justify-content: center;
    }
  }
`;

const BtnInner = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 360px;

    @media ${maxDeviceSize.phone} {
      max-width: 100%;
      white-space: normal;
    }
  }
`;

const Hint = styled.div`
  margin-top: 14px;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.58);
`;
