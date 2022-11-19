import React, {useState, useReducer} from 'react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import { alignPropType } from 'react-bootstrap/esm/types'
import { useForm } from 'react-hook-form'
import { api } from '../api'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router'
import {reducer, initialState } from '../reducer'
import {ActionTypes } from '../reducer/ActionTypes'

const AddForm = () => {

  const navigate = useNavigate()

  const { register, handleSubmit, watch, formState : { errors }} = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const onSubmit = async data => {
    setIsLoading(true)
    data = {id : uuidv4(),...data}
    const res = await api.post('/blogs',data)

    dispatch({type : ActionTypes.ADD_BLOG, payload : res.data})
    
    setIsLoading(false)
    navigate('/')
  }

  return (
    <Container style={{ 
      marginTop : 100
     }}>
      <Row>
        <Col md='8' className='mx-auto'>
          <Card>
            <Card.Header>
                Add New Blog
            </Card.Header>
            <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="blog.title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" {...register("title",{required : 'Title is required'})} />
              </Form.Group>
              {errors.title && <p className='text-danger' role='alert'>{errors.title?.message}</p>}
              <Form.Group className="mb-3" controlId="blog.description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("description",{required : true})} />
              </Form.Group>
              {errors.description && <p className='text-danger' role='alert'>Description field is required</p>}
              {
                isLoading ?
                <Button type='submit' variant='dark' disabled>Add Blog</Button>
                :
                <Button type='submit' variant='dark'>Add Blog</Button>

              }
            </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AddForm