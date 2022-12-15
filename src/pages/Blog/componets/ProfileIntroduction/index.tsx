import { ProfileIntroductionAvatar, ProfileIntroductionIntro, ProfileIntroductionIntroContent, ProfileIntroductionIntroFooter, ProfileIntroductionIntroHeader, ProfileIntroductionsContainer, ProfileIntroductionsContent } from "./ProfileIntroduction";
import {ArrowSquareOut} from 'phosphor-react'
import {FaGithub, FaBuilding, FaUserFriends} from 'react-icons/fa'
import Avatar from '../../../../assets/Avatar.png'

export function ProfileIntroduction(){


    return <>
        <ProfileIntroductionsContainer >
            <ProfileIntroductionsContent>
                <ProfileIntroductionAvatar src={Avatar} alt="Avatar do github"/>
                <ProfileIntroductionIntro >
                    
                    <ProfileIntroductionIntroHeader>
                        <span>Cameron Williamson</span>
                        <a href="#">
                            <label>github</label> 
                            <ArrowSquareOut size={12} weight="bold" />
                        </a>
                    </ProfileIntroductionIntroHeader>

                    <ProfileIntroductionIntroContent>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </ProfileIntroductionIntroContent>

                    <ProfileIntroductionIntroFooter>
                        <div> <FaGithub />cameronwill</div>
                        <div> <FaBuilding /> Rocketseat</div>
                        <div> <FaUserFriends /> 32 seguidores</div>
                    </ProfileIntroductionIntroFooter>
                </ProfileIntroductionIntro>
            </ProfileIntroductionsContent>
        </ProfileIntroductionsContainer>
    </>
}