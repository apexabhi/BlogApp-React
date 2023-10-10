import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { v4 as uuid } from "uuid";
import { addBlog } from '../statemanagers/blogSlice';
import { Link, useNavigate } from 'react-router-dom';
const AddBlog = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const onTitleChanged = e => setTitle(e.target.value)
    const onCategoryChanged = e => setCategory(e.target.value)
    const onAuthorChanged = e => setAuthor(e.target.value)
    const onDescriptionChanged = e => setDescription(e.target.value)
    const isValid =()=>{
        if(description.trim().length >= 5 && title.trim().length>=3){
            return true;
        }
        return false;

    } 
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isValid()) {
            return;
        }
        const id = uuid();
        dispatch(addBlog({ id, title, category, author, description }));
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            navigate("/");
        }, 1000);
    }

    return (
        <>
        <Link to='/' className='btn btn-outline-secondary mx-5 mt-3'>Back</Link>
        <div className="container-fluid col-md-6 p-5 mt-5">
            <h2 className='mt-3'>Add a New Blog!!</h2>
            {showAlert &&
                <div className="alert alert-success" role="alert">
                    Blog added successfully!
                </div>
            }
            <form id='addForm' onSubmit={handleSubmit}>
                <div className='my-3'>
                    <label htmlFor="blogTitle" className='form-label'>Blog Title:</label>
                    <input
                        className={`form-control ${isValid() ? '' : 'is-invalid'}`}
                        type="text"
                        id="blogTitle"
                        name="blogTitle"
                        value={title}
                        onChange={onTitleChanged}
                        placeholder='Enter the title for blog' required />
                        {!isValid() && (
                        <div className="invalid-feedback">
                            Title must be atlest 3 characters long
                        </div>
                    )}
                </div>
                <div className='my-3'>
                    <label htmlFor="category" className='form-label'>Blog Category:</label>
                    <input
                        required
                        className='form-control'
                        pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                        title='Please enter alphabets only and not only spaces'
                        type="text"
                        id="category"
                        name="category"
                        value={category}
                        onChange={onCategoryChanged}
                        placeholder='Enter the category for blog'
                    />
                </div>
                <div className='my-3'>
                    <label htmlFor="author" className='form-label'>Blog Author:</label>
                    <input
                        required
                        pattern="^[A-Za-z]+(?: [A-Za-z]+)*$"
                        title='Please enter alphabets only and not only spaces'
                        className='form-control'
                        type="text"
                        id="author"
                        name="author"
                        value={author}
                        onChange={onAuthorChanged}
                        placeholder='Enter the author for blog'
                    />
                </div>
                <div className='my-3'>
                    <label htmlFor="description" className='form-label'>Description of blog: </label>
                    <textarea
                        className={`form-control ${isValid() ? '' : 'is-invalid'}`}
                        id="description"
                        name="description"
                        value={description}
                        onChange={onDescriptionChanged}
                        placeholder='Describe your blog here....'
                        required
                    />
                     {!isValid() && (
                        <div className="invalid-feedback">
                            Description must be at least 5 characters long.
                        </div>
                    )}
                </div>
                <input
                    className='bt'
                    type="submit"
                    value="Add Blog" />
            </form>
        </div>
        </>
    )
}

export default AddBlog


