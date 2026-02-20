import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

const email = import.meta.env.VITE_EMAIL as string | undefined;
const phone = import.meta.env.VITE_PHONE_NUMBER as string | undefined;
const address = import.meta.env.VITE_ADDRESS as string | undefined;

const toTelHref = (value?: string) => {
  if (!value) return undefined;
  const normalized = value.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : undefined;
};

const toMailHref = (value?: string) => (value ? `mailto:${value}` : undefined);

const toMapsHref = (value?: string) =>
  value
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        value,
      )}`
    : undefined;

export const BottomBar = () => {
  const [visible, setVisible] = useState(false);

  const lastY = useRef(0);
  const acc = useRef(0);

  const hasAny = !!(email || phone || address);

  useEffect(() => {
    if (!hasAny) return;

    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 80) {
        setVisible(false);
        acc.current = 0;
        lastY.current = y;
        return;
      }

      acc.current += delta;

      const THRESHOLD = 18;

      if (acc.current > THRESHOLD) {
        setVisible(true);
        acc.current = 0;
      } else if (acc.current < -THRESHOLD) {
        setVisible(false);
        acc.current = 0;
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasAny]);

  if (!hasAny) return null;

  const telHref = toTelHref(phone);
  const mailHref = toMailHref(email);
  const mapsHref = toMapsHref(address);

  return (
    <Wrapper role="contentinfo" aria-label="Szybki kontakt" $visible={visible}>
      <Inner>
        {address && (
          <Item
            as={mapsHref ? "a" : "div"}
            href={mapsHref}
            target={mapsHref ? "_blank" : undefined}
            rel={mapsHref ? "noreferrer" : undefined}
            aria-label="Otwórz adres w mapach"
            $clickable={!!mapsHref}
          >
            <MdLocationOn size={20} />
            <Text>
              <Label>Adres</Label>
              <Value title={address}>{address}</Value>
            </Text>
          </Item>
        )}

        {email && (
          <Item
            as={mailHref ? "a" : "div"}
            href={mailHref}
            aria-label="Napisz e-mail"
            $clickable={!!mailHref}
          >
            <MdEmail size={20} />
            <Text>
              <Label>E-mail</Label>
              <Value title={email}>{email}</Value>
            </Text>
          </Item>
        )}

        {phone && (
          <Item
            as={telHref ? "a" : "div"}
            href={telHref}
            aria-label="Zadzwoń"
            $clickable={!!telHref}
          >
            <MdCall size={20} />
            <Text>
              <Label>Telefon</Label>
              <Value title={phone}>{phone}</Value>
            </Text>
          </Item>
        )}
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1200;

  transform: translateY(${({ $visible }) => ($visible ? "0%" : "110%")});
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};

  transition:
    transform 220ms ease,
    opacity 180ms ease;

  background: rgba(10, 10, 10, 0.38);
  border-top: 1px solid rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);

  padding-bottom: env(safe-area-inset-bottom);

  box-shadow:
    0 -10px 30px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  @supports not (
    (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))
  ) {
    background: rgba(0, 0, 0, 0.78);
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 14px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;

  @media ${maxDeviceSize.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div<{ $clickable?: boolean }>`
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px;
  border-radius: 16px;

  color: ${colors.white};
  text-decoration: none;

  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);

  backdrop-filter: blur(14px) saturate(160%);
  -webkit-backdrop-filter: blur(14px) saturate(160%);

  transition: all 0.18s ease;

  svg {
    color: ${colors.orange};
  }

  ${({ $clickable }) =>
    $clickable
      ? `
    cursor: pointer;

    &:hover {
      transform: translateY(-1px);
      background: rgba(255,255,255,0.09);
    }

    &:active {
      transform: scale(0.98);
    }
  `
      : `
    opacity: 0.9;
  `}
`;

const Text = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.72);
`;

const Value = styled.span`
  font-size: 0.98rem;
  font-weight: 700;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${maxDeviceSize.tablet} {
    white-space: normal;
  }
`;
