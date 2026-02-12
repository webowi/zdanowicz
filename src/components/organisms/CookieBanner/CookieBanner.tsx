import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";
import {
  getCookiesConsent,
  setCookiesConsent,
} from "../../../utils/cookies/cookiesConsent";
import { Link } from "react-router-dom";
import { pagesPaths } from "../../../constans/pagesPaths";

type Props = {
  privacyPolicyPath?: string;
};

export const CookieBanner: React.FC<Props> = ({
  privacyPolicyPath = "/polityka-prywatnosci",
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
                <li>
                  zapamiętanie Twojej decyzji o wyświetlaniu tego komunikatu.
                </li>
              </List>
              <MoreText>
                Nie używamy cookies analitycznych ani marketingowych (np. do
                śledzenia reklam). Szczegóły znajdziesz w{" "}
                <Link to={pagesPaths.privacyPolicy}>Polityce Prywatności</Link>.
              </MoreText>
            </More>
          )}

          <Actions>
            <LinkBtn type="button" onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Zwiń" : "Dowiedz się więcej"}
            </LinkBtn>

            <RightActions>
              <GhostLink href={privacyPolicyPath}>
                Polityka prywatności
              </GhostLink>
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

  background: rgba(0, 0, 0, 0.86);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 1.25rem 1.25rem 1.1rem;

  backdrop-filter: blur(14px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  @media ${maxDeviceSize.phone} {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
`;

const Badge = styled.span`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${colors.white};
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
`;

const Title = styled.p`
  margin: 0;
  color: ${colors.yellow};
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Body = styled.div``;

const Text = styled.p`
  margin: 0;
  color: ${colors.grayLight};
  line-height: 1.65;
  font-size: 1.05rem;

  strong {
    color: ${colors.white};
    font-weight: 700;
  }

  @media ${maxDeviceSize.phone} {
    font-size: 1rem;
  }
`;

const More = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const MoreTitle = styled.p`
  margin: 0 0 0.6rem;
  color: ${colors.white};
  font-weight: 700;
`;

const List = styled.ul`
  margin: 0 0 0.8rem;
  padding-left: 1.2rem;

  li {
    color: ${colors.grayLight};
    line-height: 1.65;
    margin-bottom: 0.35rem;
  }
`;

const MoreText = styled.p`
  margin: 0;
  color: ${colors.grayLight};
  line-height: 1.65;

  a {
    color: ${colors.yellow};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1.1rem;

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
  color: ${colors.grayLight};
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: left;

  &:hover {
    color: ${colors.white};
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

const GhostLink = styled.a`
  color: ${colors.grayLight};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

const PrimaryBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 14px;
  padding: 0.85rem 1.1rem;
  font-weight: 900;
  letter-spacing: 0.03em;

  background: ${colors.yellow};
  color: ${colors.black};

  &:active {
    transform: translateY(1px);
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
