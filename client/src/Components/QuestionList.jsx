import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

function ListQuestions({categoryID, setCategoryID}) {
  const [questions, setQuestions] = useState([])

    useEffect(() => {
      async function fetchQuestions (categoryID) {
        console.log ( `Fetching questions from db ${categoryID} ...`)
        const response = await axios.get (`http://localhost:4000/questions/${categoryID}`)
        setQuestions (response.data)
      }
      fetchQuestions(categoryID);
    }, [categoryID])

function ActiveExample() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li" active>
        What is the term for marking trails with paint or signs?
      </ListGroup.Item>
      <ListGroup.Item as="li">What is the best place to set up a tent?</ListGroup.Item>
      <ListGroup.Item as="li" disabled>What does the drag setting on a fishing reel do?</ListGroup.Item>
      <ListGroup.Item as="li">What is a simple way to purify water in the wild?</ListGroup.Item>
    </ListGroup>
  );
}

  return (
    <>
    {
      questions.map((question,index)=> (
        <p key={index}>{question.title}</p>
      ))
    }
    </>
  )
}