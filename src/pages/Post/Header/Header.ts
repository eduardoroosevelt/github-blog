import styled from 'styled-components'


export const PostHeaderContainer = styled.div`
    background: ${(props) => props.theme['base-profile']};
    padding: 2rem;
    border-radius:  10px;
    width: 54rem;
    height: 10.5rem;
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const PostHeaderCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PostHeaderCabecalhoVoltar = styled.a`
    display: flex;
    gap:0.5rem;

    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
    cursor: pointer;
    
    color: ${(props) => props.theme['blue']};
    text-transform: uppercase;
    align-items: center;
    text-decoration: none;
    
    label{
        cursor: pointer;

    }

`

export const PostHeaderCabecalhoGithub = styled.a`
    display: flex;
    gap:0.5rem;

    font-weight: 700;
    font-size: 12px;
    line-height: 160%;

    color: ${(props) => props.theme['blue']};
    text-transform: uppercase;
    align-items: center;
    text-decoration: none;
`

export const PostHeaderContent = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
`

export const PostHeaderFooter = styled.div`
    margin-top: 0.5rem;

    display: flex;
    gap: 2rem;
    color: ${(props) => props.theme['base-label']};
    div{
        display: flex;
        align-items: center;
        gap: 8px;
    }
`