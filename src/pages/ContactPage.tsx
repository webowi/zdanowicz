import React from "react";
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";
import { colors } from "../utils/colors";
import { maxDeviceSize } from "../utils/deviceSize";
import { MdEmail, MdPhone, MdCheckCircle } from "react-icons/md";

const ContactPage: React.FC = () => {
  const email = import.meta.env.VITE_EMAIL as string | undefined;
  const phone = import.meta.env.VITE_PHONE_NUMBER as string | undefined;

  return (
    <MainLayout>
      <Section aria-label="Kontakt">
        <Content>
          <Card>
            <Badge>
              <MdCheckCircle size={18} />
              Odpowiadamy szybko i konkretnie
            </Badge>

            <Title>Skontaktuj się z nami</Title>

            <Lead>
              Potrzebujesz wyceny lub konsultacji? Napisz lub zadzwoń —
              doradzimy i przygotujemy <strong>darmową wycenę</strong>.
            </Lead>

            <Cards>
              {email && (
                <ContactCard
                  href={`mailto:${email}`}
                  aria-label="Napisz e-mail"
                >
                  <IconBadge aria-hidden="true">
                    <MdEmail size={22} />
                  </IconBadge>
                  <Text>
                    <Label>E-mail</Label>
                    <Value title={email}>{email}</Value>
                  </Text>
                </ContactCard>
              )}

              {phone && (
                <ContactCard href={`tel:${phone}`} aria-label="Zadzwoń">
                  <IconBadge aria-hidden="true">
                    <MdPhone size={22} />
                  </IconBadge>
                  <Text>
                    <Label>Telefon</Label>
                    <Value title={phone}>{phone}</Value>
                  </Text>
                </ContactCard>
              )}
            </Cards>

            <Hint>Darmowa wycena • bez zobowiązań • szybka odpowiedź</Hint>
          </Card>
        </Content>
      </Section>
    </MainLayout>
  );
};

export default ContactPage;

const Section = styled.section`
  --nav-h: 68px;

  position: relative;
  background: #f6f7f9;

  min-height: calc(100vh - var(--nav-h));
  padding: var(--nav-h) 2rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

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
    padding: var(--nav-h) 1rem 2rem;

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

const Title = styled.h1`
  margin: 0 0 10px;
  font-size: 2.35rem;
  font-weight: 900;
  color: #121316;

  @media ${maxDeviceSize.phone} {
    font-size: 1.85rem;
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

const Cards = styled.div`
  margin-top: 6px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media ${maxDeviceSize.tablet} {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;

  padding: 14px 14px;
  border-radius: 18px;

  text-decoration: none;

  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.16s ease,
    background 0.16s ease,
    border-color 0.16s ease,
    box-shadow 0.16s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    pointer-events: none;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.24),
      rgba(255, 255, 255, 0.08) 35%,
      rgba(255, 255, 255, 0) 62%
    );
    opacity: 0.65;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(238, 52, 56, 0.22);
    background: rgba(238, 52, 56, 0.1);
    box-shadow: 0 18px 38px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid rgba(238, 52, 56, 0.45);
    outline-offset: 2px;
  }
`;

const IconBadge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};

  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
`;

const Text = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.div`
  font-size: 0.82rem;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 900;
`;

const Value = styled.div`
  font-size: 1.05rem;
  font-weight: 900;
  color: #111;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${maxDeviceSize.phone} {
    white-space: normal;
  }
`;

const Hint = styled.div`
  margin-top: 14px;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.58);
`;
