import React from "react";
import { Link } from "react-router-dom";

const Image = ({ url, title, id }) => (
    <li>
        <Link to={{ pathname: 'image/' + id, state: { id: id } }} >
            <img src={url} alt={title} />
        </Link>
    </li>
);

export default Image;