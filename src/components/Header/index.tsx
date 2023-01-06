import { HeaderContainer, HeaderContent, HeaderImgEffectLeft, HeaderImgEffectRight } from './styles'
import logoImg from '../../assets/logo.png'
import effectLeft from '../../assets/effect-left.png'
import effectRight from '../../assets/effect-right.png'
import Cover from '../../assets/Cover.png'

export function Header() {
    return (
        <HeaderContainer >
            {/* <HeaderImgEffectLeft src={effectLeft} alt="" />

            <HeaderContent>
                <img src={logoImg} alt="" />
            </HeaderContent>

            <HeaderImgEffectRight src={effectRight} alt="" /> */}
            <img src={Cover} alt="" />
        </HeaderContainer>
    )
}