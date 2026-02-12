import { useEffect, useRef, useState } from "react";
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
  const [visible, setVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  // ---- Scroll refs (bez przepinania listenera)
  const prevYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      tickingRef.current = false;

      const y = window.scrollY;

      setIsTop(y < 10);

      // schowaj dopiero po mini progu, żeby nie "migało"
      const shouldShow = y < 40 || y < prevYRef.current;
      setVisible(shouldShow);

      prevYRef.current = y;
    };

    const onScroll = () => {
      // throttling przez rAF = mniej setState
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- Close on route change (tylko gdy pathname faktycznie się zmieni)
  const lastPathRef = useRef(location.pathname);
  const menuOpenRef = useRef(menuOpen);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (lastPathRef.current === location.pathname) return;
    lastPathRef.current = location.pathname;

    if (!menuOpenRef.current) return;

    // async -> żeby nie triggerować "set-state-in-effect"
    const id = window.setTimeout(() => setMenuOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [location.pathname]);

  // ---- Lock body scroll + ESC + focus (tylko gdy menu otwarte)
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusId = window.setTimeout(() => closeBtnRef.current?.focus(), 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        openerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusId);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => {
    setMenuOpen(false);
    openerRef.current?.focus();
  };

  return (
    <>
      <StyledNavbarWrapper $visible={visible} $isTop={isTop}>
        <StyledNavbarContainer>
          <StyledLogo>
            <NavLink to={pagesPaths.homePage} aria-label="Strona główna">
              <img src={LogoImage} alt="Logo Zdanowicz" />
            </NavLink>
          </StyledLogo>

          {/* Desktop */}
          <StyledNavSection>
            {navItems.map(({ to, label, variant }) =>
              variant === "primary" ? (
                <DesktopPrimaryLink key={to} to={to}>
                  {label}
                </DesktopPrimaryLink>
              ) : (
                <DesktopLink key={to} to={to}>
                  {label}
                </DesktopLink>
              ),
            )}
          </StyledNavSection>

          {/* Mobile toggle */}
          <MobileToggleButton
            ref={openerRef}
            onClick={menuOpen ? closeMenu : openMenu}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </MobileToggleButton>
        </StyledNavbarContainer>
      </StyledNavbarWrapper>

      {/* Backdrop */}
      <Backdrop $open={menuOpen} onClick={closeMenu} aria-hidden={!menuOpen} />

      {/* Drawer */}
      <Drawer
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

const StyledNavbarWrapper = styled.div<{
  $visible: boolean;
  $isTop: boolean;
}>`
  position: fixed;
  top: ${({ $visible }) => ($visible ? "0" : "-120px")};
  width: 100%;
  z-index: 1010;

  background: ${({ $isTop }) => ($isTop ? "transparent" : "rgba(0,0,0,0.78)")};
  border-bottom: ${({ $isTop }) =>
    $isTop ? "1px solid transparent" : "1px solid rgba(255,255,255,0.08)"};

  backdrop-filter: ${({ $isTop }) => ($isTop ? "none" : "blur(10px)")};

  transition:
    top 0.35s ease,
    background 0.25s ease,
    border-color 0.25s ease;
`;

const StyledNavbarContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 18px;
  display: flex;
  align-items: center;

  @media ${maxDeviceSize.tablet} {
    padding: 10px 12px;
  }
`;

const StyledLogo = styled.div`
  flex-grow: 1;

  img {
    width: 50%;

    @media ${maxDeviceSize.phone} {
      width: 100%;
    }
  }
`;

const StyledNavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media ${maxDeviceSize.tablet} {
    display: none;
  }
`;

const DesktopLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.grey};
  transition: color 0.2s ease;
  font-size: 1.05rem;

  &:hover {
    color: ${colors.white};
  }

  &.active {
    color: ${colors.white};
  }
`;

const DesktopPrimaryLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 1.05rem;

  padding: 0.75rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${colors.orange};
  }

  &.active {
    border-color: ${colors.orange};
  }
`;

const MobileToggleButton = styled.button`
  display: none;

  @media ${maxDeviceSize.tablet} {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;

    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.06);
    color: ${colors.white};

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
  width: min(360px, 88vw);
  z-index: 2001;

  background: rgba(0, 0, 0, 0.92);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);

  transform: translateX(${({ $open }) => ($open ? "0%" : "105%")});
  transition: transform 0.25s ease;

  display: flex;
  flex-direction: column;
`;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 16px 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const DrawerTitle = styled.div`
  color: ${colors.orange};
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const DrawerClose = styled.button`
  width: 44px;
  height: 44px;

  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: ${colors.white};

  cursor: pointer;
`;

const DrawerList = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DrawerItem = styled(NavLink)<{ $primary?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 14px 14px;
  border-radius: 14px;

  text-decoration: none;
  color: ${({ $primary }) => ($primary ? colors.black : colors.white)};

  background: ${({ $primary }) =>
    $primary ? colors.orange : "rgba(255,255,255,0.06)"};

  border: 1px solid
    ${({ $primary }) => ($primary ? "transparent" : "rgba(255,255,255,0.10)")};

  font-weight: 800;
  letter-spacing: 0.01em;

  &:hover {
    border-color: ${({ $primary }) =>
      $primary ? "transparent" : colors.orange};
  }

  &.active {
    border-color: ${({ $primary }) =>
      $primary ? "transparent" : colors.orange};
  }
`;

const DrawerFooter = styled.div`
  margin-top: auto;
  padding: 14px 16px 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const FooterText = styled.p`
  margin: 0;
  color: ${colors.grayLight};
  line-height: 1.5;
  font-size: 0.95rem;
`;

export default Navbar;
