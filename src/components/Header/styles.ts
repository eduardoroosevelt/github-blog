import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 1440px;
    max-height: 296px;
    background: ${(props) => props.theme['base-profile']};
   
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export const HeaderContent = styled.div`   
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: 8.375rem;
`

export const HeaderImgEffectLeft = styled.img`
    height: 188px;
    margin-top:4.375rem;
`

export const HeaderImgEffectRight = styled.img`
    height: 236;
    margin-top:1.875rem;
`

