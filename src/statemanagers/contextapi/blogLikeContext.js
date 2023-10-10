import React,{createContext,useContext,useState,useEffect} from 'react'

const BlogContext=createContext();

export function useBlogContext(){
    return useContext(BlogContext);
}

export function BlogLikeProvider({children}){
    const [blogLikes, setBlogLikes] = useState(JSON.parse(localStorage.getItem('blogLikes')) || {});
    const [deletedBlog, setDeletedBlog] = useState(null);
    useEffect(() => {
      localStorage.setItem('blogLikes', JSON.stringify(blogLikes));
    }, [blogLikes]);

  const likeBlog = (blogId) => {
    setBlogLikes((prevLikes) => ({
      ...prevLikes,
      [blogId]: !prevLikes[blogId],
    }));
    console.log("Blog Liked")
  };
  const alertBlog = (blog) => {
    setDeletedBlog(blog);
    setTimeout(() => {
      setDeletedBlog(null);
    }, 1000); // Adjust the timeout duration as needed
  };

  const value = {
    blogLikes,
    likeBlog,
    deletedBlog,
    alertBlog
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}