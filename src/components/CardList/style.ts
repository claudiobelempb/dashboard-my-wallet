import styled from 'styled-components';

interface ICardListContainerInfoProps {
  tagcolor?: string;
}

export const CardListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding: 20px 0;
  width: 100%;
  min-width: 100%;
`;

export const CardListContainerInfo = styled.li<ICardListContainerInfoProps>`
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 17px;
  background-color: ${props => props.theme.colors.dark_light};
  border-radius: 5px;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: .7;
    transform: translateX(10px);
  }
  &::before {
    display: block;
    content: '';
    width: 14px;
    height: 31px;
    background-color: ${props => props.tagcolor || "#000"};
    position: absolute;
    left: 0;
    top: 15px;
  }   
`;

export const CardListRecorrentesTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  
  &::after {
    display: block;
    content: '';
    width: 54px;
    height: 10px;
    background-color: ${props => props.theme.colors.sucess};
    margin-top: 5px;
  }
`;

export const CardListEventuaisTitle = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  &::after {
    display: block;
    content: '';
    width: 54px;
    height: 10px;
    background-color: ${props => props.theme.colors.warning};
    margin-top: 5px;
  }
`;

export const CardListTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CardListTitle = styled.span`
  font-size: 20px;
  font-weight: 100;
  color: ${props => props.theme.colors.white};

  & > span {
    font-weight: 100;
    font-size: 16px;
  }
`;

export const CardListSubTitle = styled.small`
  font-weight: 100;
  font-size: 16px;
  color: ${props => props.theme.colors.white};
`;

export const CardListAmount = styled.span`
  font-size: 24;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;
