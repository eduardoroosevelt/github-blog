import styled from 'styled-components'



export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 2rem;
  border-radius:  10px;
  max-width: 416px;
  max-height: 260px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover{
    border: 2px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h5{

    width: 283px;
    height: 64px;

    font-family: 'Nunito';
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: ${(props) => props.theme['base-title']};
  }

  span{
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
    min-width: 54px;
  }
`
export const CardContent = styled.div`
  
  height: 112px;
 
  p{
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: ${(props) => props.theme['base-text']};
    
    width :352px;
    height: 112px;
    
    white-space:normal;
    overflow: hidden;

    text-overflow: ellipsis ellipsis;
  }
`