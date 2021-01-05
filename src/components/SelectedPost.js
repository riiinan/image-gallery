import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Card, Button
} from 'react-bootstrap'
const SelectedPost = (props) => {
    const photoId = props.match.params.id
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        axios
            .get(
                `http://jsonplaceholder.typicode.com/posts/` + photoId
            )
            .then(response => {
                setPhoto(response.data);
            })
            .catch(error => {
                console.log(
                    error
                );
            });

    }, [])


    return (
        <div>
            <br />
            <Button onClick={() => window.history.back()}>Go back</Button>
            <Card className="centered" style={{ width: '600px',  }}>
                <Card.Body>
                    <Card.Title>Selected post</Card.Title>
                    <Card.Text>
                       Title: {photo.title}
                      
                       </Card.Text>
                       <Card.Text>
                       Body: {photo.body}

    </Card.Text>
                </Card.Body>
            </Card>
           

        </div>
    );
};

export default SelectedPost;