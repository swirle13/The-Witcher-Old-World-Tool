import { ListGroup, ListGroupItem } from "react-bootstrap";


export default function CommunityLinks() {
    return (
        <ListGroup>
            <ListGroupItem action href="https://discord.com/invite/mX8yvYQTuq">
                Go On Board Official Discord (ListGroupItem)
            </ListGroupItem>
            <ListGroup.Item action href="https://discord.com/invite/mX8yvYQTuq">
                Go On Board Official Discord (ListGroup.Item)
            </ListGroup.Item>
        </ListGroup>
    )
}