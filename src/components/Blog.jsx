import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Blog = ({blog}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
          {blog.description.substring(0,200)+'...'}
        </Card.Text>
        <Link className="btn btn-primary" to={`blogs/${blog.id}`}>View</Link>
      </Card.Body>
    </Card>
  )
}

export default Blog