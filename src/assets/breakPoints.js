const breakpoints = {
  mobile: 360,
  mobilePlus: 576,
  tablet: 768,
  tabletPlus: 992,
  bigScreen: 1200,
};

export const bp = Object.fromEntries(
  Object.entries(breakpoints).map(([key, val]) => [
    key,
    `@media (min-width: ${val}px)`,
  ])
);
