import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import AddBlog from './pages/AddBlog';
import ShowAllBlogs from './pages/ShowAllBlogs';
import BlogDetails from './pages/BlogDetails';
import EditBlog from './pages/EditBlog';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<ShowAllBlogs />} />
        <Route path="blog">
          <Route index element={<AddBlog />} />
          <Route path="details/:blogId" element={<BlogDetails /> } />
          <Route path="edit/:blogId" element={<EditBlog /> } />
        </Route>
        
      </Route>
      <Route path='/*' element={<PageNotFound />} />
      
      
    </Routes>
    </>
  );
}

export default App
