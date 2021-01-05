import React from "react";
import { Link } from "react-router-dom";
import {
    Card
} from 'react-bootstrap'

const Post = ({ title, id }) => (
    <li>
         <Card>
                <Card.Body>
                <Link to={{ pathname: 'post/' + id, state: { id: id } }} >
                    <Card.Title>{title}</Card.Title>
                    </Link>
                </Card.Body>
            </Card>
    </li>
);

export default Post;