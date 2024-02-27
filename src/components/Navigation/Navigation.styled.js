import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: baseline;

  padding: ${p => p.theme.spacing(1)};
  margin: ${p => p.theme.spacing(1)};
`;
