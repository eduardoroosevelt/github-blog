import styled from 'styled-components'


export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: -88px;
    width: 100%;

`

export const BlogContent = styled.div`
    max-width: 864px;
`
export const BlogSearchCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 4.5rem;

    h4{
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 700;
        font-size: 18px;
        line-height: 160%;
    }

    span{
        color: ${(props) => props.theme['base-span']};
        font-size: 14px;
        line-height: 160%;
    }
`

export const BlogSearchForm = styled.form`
    margin-top: 12px ;
    input{
        width: 100%;
        height: 3.125rem;
        background: ${(props) => props.theme['base-input']};

        padding: 12px 16px;
        border: 1px solid;
        border-color: ${(props) => props.theme['base-border']};
        border-radius: 6px;
        
        color: ${(props) => props.theme['base-text']};
        font-size: 16px;
        line-height: 160%;

        box-sizing: border-box;

        &:focus{
            border: 1px solid;
            border-color: ${(props) => props.theme['blue']};
        }

        &::placeholder{
            font-size: 16px;
            line-height: 160%;
            color: ${(props) => props.theme['base-label']};
        }
    }
`


export const BlogListIssues = styled.div`
    
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

`