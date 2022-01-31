import { Box, Typography } from '@mui/material';
import Image from '../../assets/unknown_error.png';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  color: rgba(51, 51, 51, 0.5);
  font-family: 'Inter', sans-serif;
`;

export const Error = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {error?.message?.includes('Network Error') ? (
        <Wrapper>
          <img src={Image} alt="No content"></img>
          <p>Wystąpił nieoczekiwany błąd</p>
        </Wrapper>
      ) : null}
    </Box>
  );
};
