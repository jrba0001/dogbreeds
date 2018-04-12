import styled from 'styled-components';

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  padding: ${props => `${props.theme.space.sm} ${props.theme.space.md}`};
`;

export default Header;
