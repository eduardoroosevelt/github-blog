import { api } from "@src/config/Axios"
import { useEffect, useState } from "react"
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { PostHeader } from "./Header";
import { PostContainer, PostContent } from "./Post";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface dadosPostType{
    body:string,
    html_url:string,
    title:string
    user:{
        login:string
    },
    created_at:string,
    comments:number
}

export function Post(){
    
   const [dadosPost, setDadosPost] = useState<dadosPostType>({user:{login:""}} as dadosPostType)
   
    let {numberIssue}= useParams();
    
    useEffect((() => {
        api.get<dadosPostType>(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${numberIssue} `).then(res =>{   
            setDadosPost(res.data)         
        })
    }),[])
    

    return (
        <PostContainer>
            <PostContent>
                <PostHeader {...dadosPost}></PostHeader>
                
                <ReactMarkdown children= {dadosPost.body}  remarkPlugins={[remarkGfm]}/>
               
            </PostContent>
        </PostContainer>
    )
}