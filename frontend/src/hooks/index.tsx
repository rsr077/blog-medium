import axios from "axios";
import { useEffect, useState } from "react";


interface Post {
   "content" : string;
   "title" : string;
   "id" : number
   "author": {
     "name": string
   }
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Post[]>([]);



 
  useEffect(() => {
    axios.get(` http://localhost:8787/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
     
      
    })
    .then(response => {
      setBlogs(response.data.blogs);
    })
    .catch(error => {
      console.error("Error fetching blogs:", error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  return {
    loading,
    blogs
  };
};
