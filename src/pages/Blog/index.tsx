import { BlogContainer, BlogContent, BlogListIssues, BlogSearchCabecalho, BlogSearchForm } from "./Blog"
import { Card } from "./componets/Card"
import { ProfileIntroduction } from "./componets/ProfileIntroduction"

export function Blog() {

    return (
        <BlogContainer>
            <BlogContent>

                <ProfileIntroduction />

                <BlogSearchCabecalho>
                    <h4>Publicações</h4>
                    <span> 6 publicações </span>
                </BlogSearchCabecalho>

                <BlogSearchForm >
                    <input type="text" placeholder="Buscar conteúdo" />
                </BlogSearchForm>

                <BlogListIssues>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </BlogListIssues>

            </BlogContent>

        </BlogContainer>
    )
}