import {useEffect,useState} from "react";
export const Fetch=()=>{
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((response)=>response.json())
    .then((result)=>setData(result))
    .catch((err)=>console.log("error occured",err));
  };
  useEffect(()=>{
    getData();
  },[]);
  return(
    <div>
      <table border="1" cellpadding="10px" align="center">
        <th>S.No</th><th>Posts</th>
        {
          data.map((d)=>(
            <tr key={d.id}>
              <td align="center">{d.id}</td>
              <td align="left">{d.title}</td>
            </tr>
          ))
        }
      </table>
      </div>
  )
}
export default Fetch;