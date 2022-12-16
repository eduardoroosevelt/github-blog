import { api } from '@src/config/Axios'
import React, { useEffect, useState } from 'react'
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

export function Blog() {

    const [profile, setProfile] = useState<ProfileIntroductionProps>();
    const [listaPublicacoes, setListaPublicacoes] = useState<PublicacoesProps>({
        total_count: 0,
        items: []
    })

    useEffect(() => {
        // api.get<ProfileIntroductionProps>(`users/diego3g`).then(res => {
        //     const { avatar_url, bio, company, followers, html_url, login, name } = res.data
        //     setProfile({ avatar_url, bio, company, followers, html_url, login, name })
        // })
        // api.get<PublicacoesProps>(`search/issues?q=repo:${REPOSITORIO_NAME}`).then(res => {
        //     setListaPublicacoes(res.data)
        // })
    }, [])



    return (
        <BlogContainer>
            <BlogContent>

                <ProfileIntroduction {...profile} />

                <BlogSearchCabecalho>
                    <h4>Publicações</h4>
                    <span> {listaPublicacoes.total_count} publicações </span>
                </BlogSearchCabecalho>

                <BlogSearchForm >
                    <input type="text" placeholder="Buscar conteúdo" />
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