import { useState } from "react"

export function CreateTodo(){
   const [name,setName]=useState(""); 
   const [description,setDescription]=useState(""); 
   const [interests,setInterests]=useState(""); 
   const [linkedin,setLinkedin]=useState(""); 
   const [twitter,setTwitter]=useState(""); 

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Name" onChange={(e)=>{
            const value=e.target.value;
            setName(value);
        }} /><br /> <br />
        <input style={{
            padding: 10,
            margin: 10
        }}  type="text" placeholder="description" onChange={(e)=>{
            const value=e.target.value;
            setDescription(value);
        }} /><br /><br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Interests" onChange={(e)=>{
            const value=e.target.value;
            setInterests(value);
        }} /><br /> <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Linkedin" onChange={(e)=>{
            const value=e.target.value;
            setLinkedin(value);
        }} /><br /> <br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Twitter" onChange={(e)=>{
            const value=e.target.value;
            setTwitter(value);
        }} /><br /> <br />
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={()=>{
            fetch("http://localhost:3000/businesscard",{
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    description: description,
                    interests: interests,
                    linkedin: linkedin,
                    twitter: twitter

                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
        }} >Add a Business card</button>
    </div>
}