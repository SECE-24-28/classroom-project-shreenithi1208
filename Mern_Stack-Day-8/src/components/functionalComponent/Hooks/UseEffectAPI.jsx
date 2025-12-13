import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
const UseEffectAPI = () =>{
    const [postsParameter,setPostsParameter] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
           setPostsParameter(res.data);
           console.log(res.data);
        })
        .catch(()=>{
         console.log("Cant't get API Data");
        });

        }, [postsParameter]);
          
   
    return( 
        <div>
            <h2>UseEffect</h2>
            <p>It is going to fetch data from JSON typicode placeholder</p>
            <ol>
                <p>The API values which fetched was </p>
                {postsParameter.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}

                
              
                
            </ol>
            </div>
            )
}
export default UseEffectAPI;