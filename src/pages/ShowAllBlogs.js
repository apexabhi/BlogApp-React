import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useBlogContext } from '../statemanagers/contextapi/blogLikeContext';
const ShowAllBlogs = () => {
    const blogs = useSelector((state) => state.blogs.blogs);
    const { deletedBlog } = useBlogContext();
    if (blogs.length === 0) {
        return (
            <>
                {deletedBlog && (
                    <div className="alert alert-danger" role="alert">
                        Blog "{deletedBlog.title}" has been deleted!
                    </div>
                )}

                <div className="container-fluid text-center" style={{marginTop:"15%"}}>
                    <h1>No blogs to display.</h1>
                </div>
            </>
        );
    }
    return (
        <>
            {deletedBlog && (
                <div className="alert alert-danger" role="alert">
                    Blog "{deletedBlog.title}" has been deleted!
                </div>
            )}
            {blogs.map((blog, index) => (
                <Link to={`blog/details/${blog.id}`} id='content' key={blog.id}>
                    <div className="row" key={blog.id}>
                        <div className="m-4">
                            <div className="card text-center" id='blogs'>
                                <div className="card-body p-3" >
                                    <h5 className="card-title">Blog{index + 1}: <u>{blog.title}</u></h5>
                                    <p className="card-text" >The category of blog is <strong><em>{blog.category}</em></strong></p>
                                    <p className="card-text" >The author of blog is <strong><em>{blog.author}</em></strong></p>
                                    < span id='viewblog'>View Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

        </>
    );
}

export default ShowAllBlogs