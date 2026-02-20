import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";
import {
  getCookiesConsent,
  setCookiesConsent,
} from "../../../utils/cookies/cookiesConsent";
import { pagesPaths } from "../../../constans/pagesPaths";

type Props = {
  privacyPolicyPath?: string;
};

export const CookieBanner: React.FC<Props> = ({
  privacyPolicyPath = pagesPaths.privacyPolicy,
}) => {
  const [visible, setVisible] = useState(() => !getCookiesConsent());
  const [expanded, setExpanded] = useState(false);

  const understand = () => {
    setCookiesConsent(true);
    setExpanded(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <Wrap
        role="dialog"
        aria-live="polite"
        aria-label="Informacja o plikach cookies"
      >
        <Header>
          <Badge>Cookies</Badge>
          <Title>Dbamy o Twoją prywatność</Title>
        </Header>

        <Body>
          <Text>
            Ta strona używa{" "}
            <strong>wyłącznie niezbędnych plików cookies</strong>, aby działała
            poprawnie i bezpiecznie (np. stabilność działania, ochrona przed
            nadużyciami).
          </Text>

          {expanded && (
            <More>
              <MoreTitle>Co to znaczy „niezbędne”?</MoreTitle>
              <List>
                <li>utrzymanie poprawnego działania serwisu,</li>
                <li>podstawowe zabezpieczenia techniczne,</li>
                <li>zapamiętanie Twojej decyzji o wyświetlaniu komunikatu.</li>
              </List>
              <MoreText>
                Nie używamy cookies analitycznych ani marketingowych (np. do
                śledzenia reklam). Szczegóły znajdziesz w{" "}
                <PolicyInlineLink to={privacyPolicyPath}>
                  Polityce Prywatności
                </PolicyInlineLink>
                .
              </MoreText>
            </More>
          )}

          <Actions>
            <LinkBtn type="button" onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Zwiń" : "Dowiedz się więcej"}
            </LinkBtn>

            <RightActions>
              <GhostLink to={privacyPolicyPath}>Polityka prywatności</GhostLink>
              <PrimaryBtn type="button" onClick={understand}>
                Rozumiem
              </PrimaryBtn>
            </RightActions>
          </Actions>
        </Body>
      </Wrap>

      <MobileSafeArea />
    </>
  );
};

const Wrap = styled.div`
  position: fixed;
  z-index: 9999;

  left: 1.5rem;
  right: 1.5rem;
  bottom: 1.5rem;

  max-width: 980px;
  margin: 0 auto;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;

  padding: 1.15rem 1.15rem 1.05rem;

  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);

  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.55);

  @media ${maxDeviceSize.phone} {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    padding: 1rem 1rem 0.95rem;
  }

  @supports not (
    (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))
  ) {
    background: rgba(255, 255, 255, 0.92);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-bottom: 0.8rem;
`;

const Badge = styled.span`
  padding: 0.38rem 0.65rem;
  border-radius: 999px;

  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
  color: ${colors.orange};

  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
`;

const Title = styled.p`
  margin: 0;
  color: #111;
  font-weight: 950;
  letter-spacing: 0.02em;
`;

const Body = styled.div``;

const Text = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.72);
  line-height: 1.6;
  font-size: 1.02rem;

  strong {
    color: #111;
    font-weight: 900;
  }

  @media ${maxDeviceSize.phone} {
    font-size: 1rem;
  }
`;

const More = styled.div`
  margin-top: 0.95rem;
  padding-top: 0.95rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const MoreTitle = styled.p`
  margin: 0 0 0.6rem;
  color: #111;
  font-weight: 900;
`;

const List = styled.ul`
  margin: 0 0 0.8rem;
  padding-left: 1.2rem;

  li {
    color: rgba(0, 0, 0, 0.68);
    line-height: 1.6;
    margin-bottom: 0.35rem;
  }
`;

const MoreText = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.68);
  line-height: 1.6;
`;

const PolicyInlineLink = styled(NavLink)`
  color: ${colors.orange};
  text-decoration: none;
  font-weight: 900;

  &:hover {
    text-decoration: underline;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1.05rem;

  @media ${maxDeviceSize.phone} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const LinkBtn = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.62);
  font-weight: 900;
  letter-spacing: 0.02em;
  text-align: left;

  &:hover {
    color: #111;
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  @media ${maxDeviceSize.phone} {
    justify-content: space-between;
  }
`;

const GhostLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.62);
  text-decoration: none;
  font-weight: 900;

  &:hover {
    color: #111;
    text-decoration: underline;
  }
`;

const PrimaryBtn = styled.button`
  border: 1px solid rgba(238, 52, 56, 0.18);
  cursor: pointer;

  border-radius: 14px;
  padding: 0.78rem 1.05rem;

  font-weight: 950;
  letter-spacing: 0.02em;

  color: #111;
  background: rgba(238, 52, 56, 0.1);

  transition:
    transform 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(238, 52, 56, 0.45);
    background: rgba(238, 52, 56, 0.14);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MobileSafeArea = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: env(safe-area-inset-bottom);
  pointer-events: none;
`;
