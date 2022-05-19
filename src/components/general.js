import styled from "styled-components";
import {
  compose,
  color,
  fontFamily,
  margin,
  typography,
  space,
  layout,
  flexbox,
  grid,
  border,
  background,
  position,
  variant
} from "styled-system";
import css from "@styled-system/css";

export const LinkWrapper = styled.a``;

const Spacer = styled.div`
  width:100%;
  height:8px;
`

export const Button = styled.button(
  css({
    padding: "7px 21px",
    borderRadius: 6,
    transition: "0.35s ease-in-out",
    border: "1px solid",
    color: "white",
    cursor: "pointer",
  }),
  compose(layout, space, color, typography, flexbox, border, position)
);


export const ErrorText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ff1f0d;
  ${color};
  ${space};
  ${typography};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  ${color};
  ${space};
  ${typography};
`;

export const Card = styled.div`
  backgound-color: white;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05), 0 2px 17px 0 rgba(0, 0, 0, 0.04);
  padding: 18px 43px;
`;

export const Sub1 = styled.p`
  ${color};
  ${fontFamily};
  ${margin}
  ${space}
  font-size: 16px;
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  ${typography}
`;

export const Sub2 = styled.p`
  ${color};
  ${fontFamily};
  ${margin}
  font-size: 14px;
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const B1 = styled.p`
  ${color};
  ${fontFamily};
  ${margin}
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
}
`;

export const B3 = styled.p`
  ${color};
  ${fontFamily};
  ${margin}
  font-family: Roboto;
  font-size: 22px;
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;

`;

export const Text = styled.span(
  css({
    font: "inherit",
  }),
  compose(layout, space, color, typography)
);
export const FlexRow = styled.div`
  display: flex;
`;

export const FlexCol = styled.div`
  dispaly: flex;
  flex-direction: column;
`;

export const Box = styled.div(
  css({
    font: "inherit",
    display: "flex",
    boxSizing: "border-box",
    minWidth: 0,
    margin: 0,
  }),
  compose(
    layout,
    space,
    color,
    typography,
    flexbox,
    border,
    background,
    position,
    grid
  )
);

export const Separator = styled.div(
  css({
    content: "",
    boxSizing: "border-box",
    minWidth: 0,
    margin: 0,
  }),
  compose(layout, space, color, typography, flexbox, border)
);

export const GridBox = styled.div(
  css({
    font: "inherit",
    display: "grid",
  }),
  compose(layout, space, color, typography, grid, border, background, position)
);

export const H6 = styled.span(
  css({
    fontSize: "16px",
    fontWeight: "bold",
    fontStretch: "condensed",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  }),
  compose(space, color, typography, layout)
);

//export const H6 = styled.p`
//  ${color};
//  ${fontFamily};
//  ${margin};
//  font-size: 16px;
//  font-weight: bold;
//  font-stretch: condensed;
//  font-style: normal;
//  line-height: normal;
//  letter-spacing: normal;
//`;

export const H5 = styled.p(
  css({
    fontSize: "22px",
    fontWeight: "bold",
    fontStretch: "condensed",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  }),
  compose(space, color, typography, layout, flexbox)
);

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: inherit;
  font-family: inherit;
`;

export const B2 = styled.p`
  ${color};
  ${fontFamily};
  ${margin};
  font-size: 14px;
  font-weight: normal;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const MiddleMiddle = styled.div`
  ${margin};
  display: flex;
  align-items: center;
  justify-content: center;
`;
