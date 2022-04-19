import { MdCases } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { RiHomeLine } from 'react-icons/ri';
import { GrCircleInformation } from 'react-icons/gr';
import styled from 'styled-components'

const Container = styled.nav`
    font-size: 25px;
    width: 50px;
    background-color: rgb(220, 220, 220, 0.2);
    border-start-end-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    a {
        display: flex;
        align-items: center;
    }
    .cs-link {
        font-size: 20px;
        text-decoration: none;
    }
`

const LeftNav = () => {
    return (
        <Container>

            <NavLink to="/">
                <RiHomeLine />
            </NavLink>


            <NavLink to="/projects">
                <MdCases />
            </NavLink>

            <NavLink to="/cv" className={"cs-link"}>
                CV
            </NavLink>

            <NavLink to="/about">
                <GrCircleInformation />
            </NavLink>

        </Container>
    )
};

export default LeftNav;
