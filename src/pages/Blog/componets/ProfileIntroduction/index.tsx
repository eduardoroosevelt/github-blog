import { ProfileIntroductionAvatar, ProfileIntroductionIntro, ProfileIntroductionIntroContent, ProfileIntroductionIntroFooter, ProfileIntroductionIntroHeader, ProfileIntroductionsContainer, ProfileIntroductionsContent } from "./ProfileIntroduction";
import { ArrowSquareOut } from 'phosphor-react'
import { FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa'
import Avatar from '../../../../assets/Avatar.png'


export interface ProfileIntroductionProps {
    avatar_url?: string
    name?: string
    html_url?: string
    bio?: string
    login?: string
    company?: string | null
    followers?: number
}

export function ProfileIntroduction(props: ProfileIntroductionProps) {


    return <>
        <ProfileIntroductionsContainer >
            <ProfileIntroductionsContent>
                <ProfileIntroductionAvatar src={props.avatar_url} alt="Avatar do github" />
                <ProfileIntroductionIntro >

                    <ProfileIntroductionIntroHeader>
                        <span>{props.name}</span>

                        <a href={props.html_url} target='_blank'>
                            <label>github</label>
                            <ArrowSquareOut size={12} weight="bold" />
                        </a>
                    </ProfileIntroductionIntroHeader>

                    <ProfileIntroductionIntroContent>
                        {props.bio}
                    </ProfileIntroductionIntroContent>

                    <ProfileIntroductionIntroFooter>
                        <div> <FaGithub />{props.login}</div>
                        {props.company && <div> <FaBuilding /> {props.company}</div>}
                        <div> <FaUserFriends /> {props.followers} seguidores</div>
                    </ProfileIntroductionIntroFooter>

                </ProfileIntroductionIntro>
            </ProfileIntroductionsContent>
        </ProfileIntroductionsContainer>
    </>
}