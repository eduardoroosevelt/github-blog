import { Link, useNavigate } from "react-router-dom";
import { CardContainer, CardContent, CardHeader } from "./Card";
import {  formatDistanceToNowStrict } from "date-fns";
import localePtBr from 'date-fns/locale/pt-BR'
interface PublicacaoProps {
  title: string
  created_at: string
  body: string,
  number?: number
}

export function Card(props: PublicacaoProps) {
  let navigate = useNavigate()


  
  let dataCriacaoTxt = ''
  if(props.created_at){        
    const dataCriacao = new Date(props.created_at)
    dataCriacaoTxt = formatDistanceToNowStrict(dataCriacao,  {addSuffix: true, locale:localePtBr})
  }
  

  return (

    <CardContainer >
      <Link to={`/post/${props.number}`}>
        <CardHeader>
          <h5> {props.title}</h5>
          <span >{dataCriacaoTxt}</span>
        </CardHeader>

        <CardContent>
          <p>{props.body}</p>
        </CardContent>
      </Link>
    </CardContainer>
  )
} 