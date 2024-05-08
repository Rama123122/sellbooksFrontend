
import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';




const ManageBook = () => {
  const [allBooks , setAllBooks] = useState([]);
  useEffect ( () => {
    fetch(`https://sellbooks.onrender.com/all-books`).then (res =>res.json()).then(data => setAllBooks(data));
  },[])

  return (
    <div className='px-4 my-12'>
       <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

       {/* table for book */}
       <div class="top-30  -z-10 h-96 w-1/2  bg-white -md dark:bg-black custom-table">
       <Table className='lg:w-[1180px]'>
   <Table.Head>
    <Table.HeadCell>No.</Table.HeadCell>
    <Table.HeadCell>Book Name</Table.HeadCell>
    <Table.HeadCell>Author Name</Table.HeadCell>
    <Table.HeadCell>Category</Table.HeadCell>
    <Table.HeadCell>Prices</Table.HeadCell>
    <Table.HeadCell>
      <span >Edit</span>
    </Table.HeadCell>
  </Table.Head>
  {
    allBooks.map((book ,index) => <Table.Body className="divide-y" key={book._id}>
           <Table.Row className="bg-gray-200 dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
       {index+1}
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {book.bookTitle}
      </Table.Cell>
      <Table.Cell>{book.authorName}</Table.Cell>
      <Table.Cell>{book.category}</Table.Cell>
      <Table.Cell>$10.00</Table.Cell>
      <Table.Cell>
        <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
          Edit
          </Link>
      </Table.Cell>
    </Table.Row>
    </Table.Body>)
  }
 
</Table>
</div>
    </div>
  )
}

export default ManageBook