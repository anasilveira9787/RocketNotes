import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'


export function Header () {

    return (<Container>
            <Profile>
                <img src="https://github.com/anasilveira9787.png" alt='Foto do usuário'/> 

                <div>
                    <span>Boas-vindas</span>
                    <strong>Ana Silveira</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
                

        </Container>
        
        
        )
}