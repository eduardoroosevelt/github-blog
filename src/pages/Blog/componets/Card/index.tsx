import { CardContainer, CardContent, CardHeader } from "./Card";

interface PublicacaoProps {
  title: string
  created_at: string
  body: string
}

export function Card(props: PublicacaoProps) {

  return (

    <CardContainer>
      <CardHeader>
        <h5> {props.title}</h5>
        <span >Há 1 dia</span>
      </CardHeader>

      <CardContent>
        <p>{props.body}</p>
      </CardContent>
    </CardContainer>
  )
} 