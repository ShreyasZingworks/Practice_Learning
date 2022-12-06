import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
    Row,
    Col,
    Card,
    CardBody,
    Label,
    Input,
    Container,
    Button
  } from "reactstrap"

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClickId = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log("response..",res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log("error..",err)
            })
    },[idFromButtonClick])

    return (
        <div>
            <Container fluid={true} className="m-2">
                <Row>
                    <Col xl="12">
                        <Row>
                            <Col md="3">
                                <Label
                                    className="form-label"
                                >
                                    Enter the Id for the post
                                </Label>
                                <Input
                                    className="form-control"
                                    placeholder="Enter Id"
                                    type="text"
                                    value={id}
                                    onChange={e => setId(e.target.value)}
                                />
                            </Col>
                            <Col md="2">
                                <Label
                                    style={{visibility:'hidden'}}
                                    className="form-label"
                                >
                                    Enter the Id for the post
                                </Label>
                                <Button
                                    color='primary'
                                    onClick={handleClickId}
                                >
                                    Fetch Post
                                </Button>
                            </Col>
                        </Row>
                        {/* {
                            posts.map(post => ( */}
                            <Card key={posts.id} className='m-3' color='primary'>
                                <CardBody>
                                    <Row>
                                        <Col md="1" className='text-white'>{posts.id}</Col>
                                        <Col md="11" className='text-white'>{posts.title}</Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            {/* ))
                        } */}
                    </Col>
                </Row>
            </Container>p;l,  c      
        </div>
    )
}

export default DataFetching
