import { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdHomeRepairService, MdWork, MdCall } from "react-icons/md";
import { colors } from "../../../utils/colors";
import { maxDeviceSize } from "../../../utils/deviceSize";
import LogoImage from "../../../assets/logo.webp";
import { pagesPaths } from "../../../constans/pagesPaths";

type NavItem = {
  to: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
  variant?: "primary";
};

const navItems: NavItem[] = [
  {
    to: pagesPaths.homePage,
    label: "Strona główna",
    Icon: MdHomeRepairService,
  },
  { to: pagesPaths.offer, label: "Oferta", Icon: MdHomeRepairService },
  { to: pagesPaths.realizations, label: "Realizacje", Icon: MdWork },
  {
    to: pagesPaths.contact,
    label: "Kontakt",
    Icon: MdCall,
    variant: "primary",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    openerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusId = window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusId);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <Wrap>
        <Bar>
          <Logo>
            <NavLink to={pagesPaths.homePage} aria-label="Strona główna">
              <img src={LogoImage} alt="Logo Zdanowicz" />
            </NavLink>
          </Logo>

          <DesktopNav>
            {navItems.map(({ to, label, variant }) =>
              variant === "primary" ? (
                <PrimaryLink key={to} to={to}>
                  {label}
                </PrimaryLink>
              ) : (
                <Link key={to} to={to}>
                  {label}
                </Link>
              ),
            )}
          </DesktopNav>

          <MobileToggle
            ref={openerRef}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MobileToggle>
        </Bar>
      </Wrap>

      <Backdrop
        key={`backdrop:${location.pathname}`}
        $open={menuOpen}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <Drawer
        key={`drawer:${location.pathname}`}
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacji"
        $open={menuOpen}
      >
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerClose
            ref={closeBtnRef}
            type="button"
            onClick={closeMenu}
            aria-label="Zamknij menu"
          >
            <FaTimes />
          </DrawerClose>
        </DrawerHeader>

        <DrawerList>
          {navItems.map(({ to, label, Icon, variant }) => (
            <DrawerItem
              key={to}
              to={to}
              $primary={variant === "primary"}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={20} />
              <span>{label}</span>
            </DrawerItem>
          ))}
        </DrawerList>

        <DrawerFooter>
          <FooterText>
            FIRMA REMONTOWO-BUDOWLANA
            <br />
            ARKADIUSZ ZDANOWICZ
          </FooterText>
        </DrawerFooter>
      </Drawer>
    </>
  );
};

export default Navbar;

const Wrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1010;

  pointer-events: none;

  @media ${maxDeviceSize.tablet} {
    pointer-events: auto;

    background: rgba(255, 255, 255, 0.62);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);

    backdrop-filter: blur(16px) saturate(140%);
    -webkit-backdrop-filter: blur(16px) saturate(140%);

    transition:
      background 0.18s ease,
      border-color 0.18s ease,
      backdrop-filter 0.18s ease;
  }
`;

const Bar = styled.nav`
  pointer-events: auto;

  max-width: 1100px;
  margin: 10px auto 0;
  padding: 8px 14px;

  display: flex;
  align-items: center;

  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;

  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);

  @media ${maxDeviceSize.tablet} {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 12px;

    background: transparent;
    border: none;
    border-radius: 0;

    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`;

const Logo = styled.div`
  flex-grow: 1;
  min-width: 0;

  img {
    width: 50%;
    height: auto;
    display: block;

    @media ${maxDeviceSize.phone} {
      width: 100%;
    }
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${maxDeviceSize.tablet} {
    display: none;
  }
`;

const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 38px;
  line-height: 1;
  padding: 0 4px;

  text-decoration: none;
  font-size: 1rem;
  font-weight: 850;
  letter-spacing: 0.01em;

  color: rgba(0, 0, 0, 0.74);
  transition: color 0.18s ease;

  &:hover {
    color: ${colors.orange};
  }

  &.active {
    color: ${colors.orange};
  }
`;

const PrimaryLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  height: 38px;
  line-height: 1;

  text-decoration: none;
  font-size: 1rem;
  font-weight: 950;

  padding: 0 0.65rem;
  border-radius: 12px;

  color: #111;
  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);

  transition:
    transform 0.18s ease,
    background 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(238, 52, 56, 0.45);
    background: rgba(238, 52, 56, 0.14);
  }

  &.active {
    border-color: rgba(238, 52, 56, 0.55);
    background: rgba(238, 52, 56, 0.16);
  }
`;

const MobileToggle = styled.button`
  display: none;

  @media ${maxDeviceSize.tablet} {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    border-radius: 14px;
    border: 1px solid rgba(0, 0, 0, 0.08);

    background: rgba(255, 255, 255, 0.62);
    color: #111;

    backdrop-filter: blur(14px) saturate(140%);
    -webkit-backdrop-filter: blur(14px) saturate(140%);

    cursor: pointer;
  }
`;

const Backdrop = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.55);

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.2s ease;
`;

const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: min(380px, 92vw);
  z-index: 2001;

  background: rgba(255, 255, 255, 0.72);
  border-left: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(18px) saturate(140%);
  -webkit-backdrop-filter: blur(18px) saturate(140%);

  box-shadow:
    -24px 0 60px rgba(0, 0, 0, 0.18),
    inset 1px 0 0 rgba(255, 255, 255, 0.55);

  transform: translateX(${({ $open }) => ($open ? "0%" : "105%")});
  transition: transform 0.25s ease;

  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.45),
      rgba(255, 255, 255, 0.18) 35%,
      rgba(255, 255, 255, 0) 62%
    );
    opacity: 0.8;
  }
`;

const DrawerHeader = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 16px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const DrawerTitle = styled.div`
  color: ${colors.orange};
  font-weight: 950;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(238, 52, 56, 0.1);
  border: 1px solid rgba(238, 52, 56, 0.18);
`;

const DrawerClose = styled.button`
  width: 44px;
  height: 44px;

  border-radius: 14px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.65);
  color: #111;

  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  cursor: pointer;
`;

const DrawerList = styled.div`
  position: relative;
  z-index: 1;

  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DrawerItem = styled(NavLink)<{ $primary?: boolean }>`
  position: relative;
  z-index: 1;

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 14px;
  border-radius: 16px;

  text-decoration: none;
  font-weight: 900;
  letter-spacing: 0.01em;

  color: rgba(0, 0, 0, 0.78);
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.16s ease,
    background 0.16s ease,
    border-color 0.16s ease,
    box-shadow 0.16s ease,
    color 0.16s ease;

  ${({ $primary }) =>
    $primary &&
    `
      color: #111;
      background: rgba(238, 52, 56, 0.10);
      border-color: rgba(238, 52, 56, 0.18);
      box-shadow: 0 10px 24px rgba(238, 52, 56, 0.18);
    `}

  svg {
    color: ${({ $primary }) => ($primary ? "#111" : colors.orange)};
    transition: color 0.16s ease;
  }

  &:hover {
    transform: translateY(-1px);

    background: ${({ $primary }) =>
      $primary ? "rgba(238, 52, 56, 0.14)" : "rgba(238,52,56,0.10)"};

    border-color: ${({ $primary }) =>
      $primary ? "rgba(238, 52, 56, 0.45)" : "rgba(238,52,56,0.28)"};

    box-shadow: ${({ $primary }) =>
      $primary
        ? "0 12px 26px rgba(238,52,56,0.22)"
        : "0 12px 26px rgba(0,0,0,0.10)"};

    color: #111;

    svg {
      color: #111;
    }
  }

  &.active {
    background: rgba(238, 52, 56, 0.16);
    color: #111;
    border-color: rgba(238, 52, 56, 0.55);
    box-shadow: 0 14px 32px rgba(238, 52, 56, 0.22);

    svg {
      color: #111;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const DrawerFooter = styled.div`
  position: relative;
  z-index: 1;

  margin-top: auto;
  padding: 14px 16px 18px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
`;

const FooterText = styled.p`
  margin: 0;
  color: rgba(0, 0, 0, 0.62);
  line-height: 1.5;
  font-size: 0.95rem;
`;
