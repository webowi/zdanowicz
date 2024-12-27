const size: Record<string, string> = {
  smallScreen: "1530px",
  verySmallScreen: "1230px",
  tablet: "1024px",
  phone: "768px",
};

export const maxDeviceSize: Record<string, string> = {
  smallScreen: `(max-width: ${size.smallScreen})`,
  verySmallScreen: `(max-width: ${size.verySmallScreen})`,
  tablet: `(max-width: ${size.tablet})`,
  phone: `(max-width: ${size.phone})`,
};

export const minDeviceSize: Record<string, string> = {
  smallScreen: `(min-width: ${size.smallScreen})`,
  verySmallScreen: `(min-width: ${size.verySmallScreen})`,
  tablet: `(min-width: ${size.tablet})`,
  phone: `(min-width: ${size.phone})`,
};
