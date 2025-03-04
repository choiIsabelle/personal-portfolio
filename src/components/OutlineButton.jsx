import styled from 'styled-components'
import { palette } from './palette'
import { OpenLinkIcon } from './svgs/OpenLinkIcon';

const StyledOutlineButton = styled.button`
  background: white;
  border: 3px solid ${(props) => props.color || palette.red};
  border-radius: 6px;
  box-sizing: border-box;
  color:  ${(props) => props.color || palette.red};
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover {
    background-color: initial;
    background-position: 0 0;
    color: ${palette.lightRed};
  }

  &:active {
    opacity: 0.5;
  }
`;

const StyledOpenLinkIconContainer = styled.div`
display: inline-block;
`;

export const OutlineButton = (props) => {
  const { title, color, icon } = props;
  return <StyledOutlineButton color={color} title={title}>{title}{icon ? <StyledOpenLinkIconContainer><OpenLinkIcon width={20} height={20}/></StyledOpenLinkIconContainer> : <></>}</StyledOutlineButton>;
};
