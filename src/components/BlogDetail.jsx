import React, { useEffect, useReducer } from 'react'
import {useParams} from 'react-router'
import { api } from '../api'
import {reducer, initialState } from '../reducer'
import {ActionTypes } from '../reducer/ActionTypes'
import {Container,Row,Col,Card} from 'react-bootstrap'

const BlogDeatil = () => {

    const {blogId } = useParams()

    const [state, dispatch] = useReducer(reducer, initialState)

    const selectedBlog = async () => {
        const res = await api.get(`/blogs/${blogId}`)

        dispatch({type : ActionTypes.SELECTED_BLOG, payload : res.data})
        
    }
    useEffect(() => {
        selectedBlog()
    },[blogId])


    return (
        <>
           <Container style={{ 
                marginTop : 100
            }}>
            <Row>
                <Col md='8' className='mx-auto'>
                    <Card>
                        <Card.Header>
                            {state.blog.title}
                        </Card.Header>
                        <Card.Body>
                            {state.blog.description}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           </Container>
        </>
    )
}


export default BlogDeatil