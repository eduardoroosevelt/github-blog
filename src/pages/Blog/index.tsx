import { api } from '@src/config/Axios'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { BlogContainer, BlogContent, BlogListIssues, BlogSearchCabecalho, BlogSearchForm } from "./Blog"
import { Card } from "./componets/Card"
import { ProfileIntroduction, ProfileIntroductionProps } from "./componets/ProfileIntroduction"

interface PublicacaoProps {
    title: string
    created_at: string
    body: string
    id: number
}
interface PublicacoesProps {
    total_count: number,
    items: PublicacaoProps[]
}

const REPOSITORIO_NAME = 'rocketseat-education/reactjs-github-blog-challenge'

type Inputs = {
    search: string,
  };

  
export function Blog() {

    const [profile, setProfile] = useState<ProfileIntroductionProps>();
    const [listaPublicacoes, setListaPublicacoes] = useState<PublicacoesProps>({
        total_count: 0,
        items: []
    })

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    
    function buscarConteudo(conteudo:string = ""){
        api.get<PublicacoesProps>(`search/issues?q=${conteudo} repo:${REPOSITORIO_NAME}`).then(res => {
            setListaPublicacoes(res.data)
        })
    }

    useEffect(() => {
        api.get<ProfileIntroductionProps>(`users/diego3g`).then(res => {
            const { avatar_url, bio, company, followers, html_url, login, name } = res.data
            setProfile({ avatar_url, bio, company, followers, html_url, login, name })
        })
        buscarConteudo()
    }, [])


    const onSubmit: SubmitHandler<Inputs> = data =>buscarConteudo(data.search)


    return (
        <BlogContainer>
            <BlogContent>

                <ProfileIntroduction {...profile} />

                <BlogSearchCabecalho>
                    <h4>Publicações</h4>
                    <span> {listaPublicacoes.total_count} publicações </span>
                </BlogSearchCabecalho>

                <BlogSearchForm onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text" 
                        placeholder="Buscar conteúdo"
                        {...register("search")}
                    />
                </BlogSearchForm>

                <BlogListIssues>
                    {
                        listaPublicacoes.items.map(item => {
                            return <Card key={item.id} {...item} />
                        })
                    }

                </BlogListIssues>
            </BlogContent>

        </BlogContainer>
    )
}