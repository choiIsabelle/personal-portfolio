import styled from 'styled-components'
import { palette } from './palette'

const StyledOutlineButton = styled.button`
  background: white;
  border: 3px solid ${palette.red};
  border-radius: 6px;
  box-sizing: border-box;
  color: ${palette.red};
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
    color: ${palette.red};
  }

  &:active {
    opacity: 0.5;
  }
`;

export const OutlineButton = ({ text, title }) => {
  return <StyledOutlineButton title={title}>{title}</StyledOutlineButton>;
};
