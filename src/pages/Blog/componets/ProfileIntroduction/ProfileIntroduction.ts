import styled from 'styled-components'

export const ProfileIntroductionsContainer = styled.div`
    
    background: ${(props) => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    max-width: 54rem;

    padding: 2rem 2rem 2rem 2.5rem;
`


export const ProfileIntroductionsContent = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`

export const ProfileIntroductionAvatar = styled.img`
    width: 148px;
    height: 148px;
    border-radius: 8px;
`

export const ProfileIntroductionIntro = styled.div`
   flex: 1;    
`

export const ProfileIntroductionIntroHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 130%;
        color: ${(props) => props.theme['base-title']};
    }   

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 8px;
        background-color: transparent;
        border: none;
        
        label {
            
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 160%;
            text-transform: uppercase;
            color: ${(props) => props.theme['blue']};

            flex: none;
            order: 1;
            flex-grow: 0;
        }

        svg {
            color: ${(props) => props.theme['blue']};
            flex: none;
            order: 2;
            flex-grow: 0;
        }
    }
`

export const ProfileIntroductionIntroContent = styled.p`
    margin-top: 0.5rem;

    font-size: 16px;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
`

export const ProfileIntroductionIntroFooter = styled.div`
    margin-top: 1.5rem;

   display: flex;
   gap: 1.5rem;

   div{
    display: flex;
    align-items: center;
    gap: 8px;
   }
`