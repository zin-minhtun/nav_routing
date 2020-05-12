import React, { Component } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Post extends Component {
    state = {
        postItem: []
    }
    componentDidMount() {
        const id = this.props.match.params.post_id;
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(response => {
                this.setState({
                    postItem: [...this.state.postItem, response.data]
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { postItem } = this.state
        const post = postItem.length ? (
            postItem.map((item, index) => {
                return (
                    <Card key={index}>
                        <CardContent>
                            <Typography variant="h5" component="h2">{item.title}</Typography>
                            <Typography>{item.body}</Typography>
                        </CardContent>
                    </Card>
                )
            })
        ) : (
                <div>Loading...</div>
            )
        return (
            <div className="post">
                <Container>
                    {post}
                </Container>
            </div>
        )
    }
}
export default Post