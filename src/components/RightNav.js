import styled from 'styled-components'
import { FiFeather } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';

const Container = styled.nav`
    font-size: 25px;
    width: 50px;
    background-color: rgb(220, 220, 220, 0.2);
    border-start-start-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const RightNav = () => {
    return (
        <Container>
            <a href='https://github.com/od-c0d3r' target='_blank' rel="noreferrer">
                <FiGithub />
            </a>
            <a href='https://www.linkedin.com/in/omarrashad' target='_blank' rel="noreferrer">
                <RiLinkedinLine />
            </a>
            <a href='mailto:me@omars.tech' target='_blank' rel="noreferrer">
                <MdAlternateEmail />
            </a>
            <a href='https://omarrashad.hashnode.dev' target='_blank' rel="noreferrer">
                <FiFeather />
            </a>
        </Container>
    );
}

export default RightNav;
