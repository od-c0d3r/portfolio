import projects from '../data/projects'
import styled from 'styled-components'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProjectsPageContainer = styled.div`
    padding-top: 100px;
`
const Projects = () => {

    return (
        <ProjectsPageContainer>
            {projects.map(project => {
                return (
                    <Card key={project.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://react-bootstrap.github.io/components/cards/holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>
                                {project.desc}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            {project["key-technologies"].map((key) => <ListGroupItem>{key}</ListGroupItem>)}
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={project.link} target="_blank">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                )
            })}

        </ProjectsPageContainer>
    )
};

export default Projects;
