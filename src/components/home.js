import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data.slice(0,10)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const post = this.state.posts.map(item => {
            return (
                <Card key={item.id}>
                    <CardContent>
                        <Link to={"/" + item.id}>
                            <Typography variant="h5" component="h2">{item.title}</Typography>
                        </Link>
                        <Typography>{item.body}</Typography>
                    </CardContent>
                </Card>
            )
        })
        return (
            <div className="homePage">
                <Container>
                    <h2>Home</h2>
                    {post}
                </Container>
            </div>
        )
    }
}
export default Home