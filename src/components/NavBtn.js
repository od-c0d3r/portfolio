import styled from 'styled-components'

const StyledBtn = styled.button`
    /* position: absolute; */
    /* left: 0; */
    color: red;
    width: 130px;
    padding: 9px 20px;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: lightcyan;
`

const NavBtn = (props) => {
    // const homeBtn = document.getElementById("homeBtn");

    return (
        <StyledBtn>
            {`${props.value}`}
        </StyledBtn>
    )
};

export default NavBtn;