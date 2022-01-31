import Image from '../../assets/no_content.png';
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

export const NoContent = () => {
  return (
    <Wrapper>
      <img src={Image} alt="No content"></img>
      <p>Brak danych do wyświetlenia</p>
    </Wrapper>
  );
};
