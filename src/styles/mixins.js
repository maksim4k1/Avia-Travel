export const gap = (gapX, gapY=gapX) => `
  column-gap: 20px;
  -moz-column-gap: ${gapX};
  -o-column-gap: ${gapX};
  -ms-column-gap: ${gapX};
  -webkit-column-gap: ${gapX};
  row-gap: ${gapY};
  -moz-row-gap: ${gapY};
  -o-row-gap: ${gapY};
  -ms-row-gap: ${gapY};
  -webkit-row-gap: ${gapY};
`;