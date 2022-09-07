import styled from 'styled-components';
import { Title } from '../theme';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src='/logo.svg' alt='logo' height='45'></img>
      <Title>TikTak</Title>
    </header>
  );
};

const StyledHeader = styled(Header)`
  text-align: center;
  padding: 1em 0;
  img {
    vertical-align: middle;
  }
`;

export default StyledHeader;
