import { formatDistanceToNow } from "date-fns";
import localePtBr from 'date-fns/locale/pt-BR'

import { ArrowSquareOut } from "phosphor-react";
import { FaCalendarDay, FaChevronLeft, FaComment, FaGithub } from "react-icons/fa";
import { PostHeaderCabecalho, PostHeaderCabecalhoGithub, PostHeaderCabecalhoVoltar, PostHeaderContainer, PostHeaderContent, PostHeaderFooter } from "./Header";
import { useNavigate } from "react-router-dom";

interface UserProps{
    login:string
}

interface PostHeaderProps{
    html_url:string,
    title:string
    user:UserProps,
    created_at:string,
    comments:number
}

export function PostHeader({html_url, title, user, created_at, comments }:PostHeaderProps){
    const navigate = useNavigate();
    
    let dataCriacaoTxt = ''
    if(created_at){        
        const dataCriacao = new Date(created_at)
        dataCriacaoTxt = formatDistanceToNow(dataCriacao,  {addSuffix: true, locale:localePtBr})
    }
    
    function onVoltar(){
        navigate('/')
    }   

    return (
        <PostHeaderContainer>
            <PostHeaderCabecalho>
                <PostHeaderCabecalhoVoltar onClick={onVoltar}>

                    <FaChevronLeft size={12}  />
                    <label>voltar</label>    

                </PostHeaderCabecalhoVoltar>

                <PostHeaderCabecalhoGithub href={html_url} target='_blank'>
                    <label>ver no github</label>
                    <ArrowSquareOut size={16} />
                </PostHeaderCabecalhoGithub>

            </PostHeaderCabecalho>

            <PostHeaderContent>
                {title}
            </PostHeaderContent>

            <PostHeaderFooter>
                <div> <FaGithub />{user.login}</div>
                <div> <FaCalendarDay />{dataCriacaoTxt}</div>
                <div> <FaComment /> {comments} comentários</div>
            </PostHeaderFooter>
        </PostHeaderContainer>
    )
}