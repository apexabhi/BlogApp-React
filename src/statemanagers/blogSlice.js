import {createSlice} from "@reduxjs/toolkit"
const LOCAL_STORAGE_KEY = "blogs";
const initialState = {
    blogs: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))||[]
};
const blogSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
            console.log("added successfully!")
            console.log(state.blogs);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.blogs));
        },

        updateBlog:(state,action)=>{
            localStorage.setItem(LOCAL_STORAGE_KEY,"");
            const { blogId, title, category, author, description } = action.payload;
            const idx = state.blogs.findIndex((blog) => blog.id === (blogId));
            console.log(idx);
            state.blogs[idx].title = title;
            state.blogs[idx].category = category;
            state.blogs[idx].author = author;
            state.blogs[idx].description = description;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.blogs));
        },
        deleteBlog:(state,action)=>{
            localStorage.setItem(LOCAL_STORAGE_KEY,"");
            const blogId=action.payload;
            state.blogs=state.blogs.filter((blog)=>blog.id!==blogId);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.blogs));
        }
    }
    
});

export const fetchBlogDetails = (state, ID) => {
    const number = ID
    const test = state.blogs.blogs.find((blog) => blog.id === number);
    console.log(test);
    return test;
  };
  


export const { addBlog,updateBlog,deleteBlog} = blogSlice.actions;
export default blogSlice.reducer;