import styled from 'styled-components';
import {
  CenteredContainer,
  SmallContainer as SmallContainerTemplate,
  Title,
} from '../theme';

const SmallContainer = styled(SmallContainerTemplate)`
  text-align: center;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.dimensions.margin.normal};
`;

const UserFormLayout = props => {
  return (
    <CenteredContainer>
      <SmallContainer>
        <Header>
          <img src='/logo.svg' alt='Logo' height='120px' />
          <div>
            <Title>TikTak</Title>
          </div>
        </Header>
        {props.children}
      </SmallContainer>
    </CenteredContainer>
  );
};

export default UserFormLayout;
