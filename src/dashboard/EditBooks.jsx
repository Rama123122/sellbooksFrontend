import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const {id} =useParams();
  const {bookTitle ,authorName,imageURL ,bookDescription, bookPdfUrl}= useLoaderData();

  const bookCatagories = [
    "Romantasy",
    "Thriller",
    "Fantasy",
    "Science Fiction",
    "Horror",
    "Young Adult & Fantasy",
    "Young Adult Fiction",
    "Debut Novel",
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Memoir",
    "Business",
    "Travel",
    "Religion",
    "Art and deisgn",
  ]

  const [selectedBookCategory ,setselectedBookCategory] =useState(bookCatagories[0]);

  const handleChangeSelectedValue = (event) => {
   console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  }

  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updatebookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPdfUrl
    }
   // console.log(bookObj)
     //update book data
     fetch(`https://sellbooks.onrender.com/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updatebookObj)
     }).then(res => res.json()).then(data =>{
      //console.log(data)
      alert("Book is Updated Succesfully!!")
    })
    
  }
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          {/* first row */}
          <div className="flex gap-8">
            {/* Book Title */}
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" type="text"  defaultValue={bookTitle} placeholder="Book Name" required />
      </div>
      { /* Author Name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" defaultValue={authorName} placeholder="Author Name" required />
      </div>
    </div>
          {/* second row */}
       <div className="flex gap-8">
            {/* image URL */}
          <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" type="text" defaultValue={imageURL} placeholder="Book Image URL" required />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCatagories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </Select>
      </div>
      </div>
      </div>

      {/* bookDescription */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name="bookDescription" defaultValue={bookDescription} placeholder="Write your book description.." required className="w-full" rows={5} />
      </div>

      {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfUrl" type="text" defaultValue={bookPdfUrl} placeholder="book Pdf Url" required />
      </div>

      <Button type="submit" className="bg-pink-300 text-white mt-5 text-right">Update Book</Button>
      </form>
  </div>
  )
}

export default EditBooks