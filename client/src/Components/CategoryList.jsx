import React from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'

export default function ListCategory({categoryID, setCategoryID}) {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    async function fetchCategories () {
      console.log ( "Fetching category from db ...")
      const response = await axios.get ('http://localhost:4000/categories/')
      setCategories (response.data)
    
    }  
    fetchCategories();
  }, [])

  
  function handleClick (event, categoryId) {
    setCategoryID (categoryId)
  }

  return (
    <>
       <Table striped>
      <thead>
        <tr >
        {categories.map((category, idx) => (     
            <th>{category.name}</th>
        ))}
        </tr>
      </thead>
    </Table>
    </>
  )
}