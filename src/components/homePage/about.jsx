// import axios, { all } from "axios"
// import { useEffect, useState } from "react"
// import content from "../../locales/data.jsx"

// const About=()=>{

//     // for (const key in content) {
//     //  console.log(key,"key ==============")
      
//     //     console.log(`${key}: ${content[key]},"key"`);
//     // }
   
 
// const keys = Object.keys(content)
// const [selectInput,setSelectInput]=useState({
//     q: content.createAccount,
//     source: "en",
//     target: "fr" ,
//     api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
//     }
// )
// const [alldata,setAlldata]=useState([])

// useEffect(()=>{
//     console.log("inside",selectInput);
//         if(selectInput.target!==undefined){
//            axios.post("https://libretranslate.de/translate",selectInput,{
//            }
//     ).then((res)=>{
//         const response=res.data
//         setAlldata([response])
//     }
//     )

//         }
// },[selectInput]);

// const selectLanguage=(e)=>{
//     e.preventDefault();
//     const keys = Object.keys(content);
//     if(selectInput!=="" && selectInput!==null ){
        
//     setSelectInput({
//         q: content.createAccount,
//         source: "en",
//         target:e.target.value ,
//         api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
//         })
//     }
  
// }


// console.log("data --->",alldata)

// console.log("selectInput",selectInput)
//     return(
//         <>
//         <section>
//             <select className="" value={selectInput?.target} onChange={(e)=>selectLanguage(e)}>
//                 <option value={"en"}>English</option>
//                 <option value={"fr"}>French</option>
//                 <option value={"es"}>Spanish</option>
//             </select>
//             <h1 style={{color:"red"}}>hello</h1>
//           {alldata &&  alldata?.map((data,ind)=>{
//            return(
//             <>
//             <h2>{data?.translatedText}</h2>
             
//             </>
//            )
//           })}
//         </section>
//         </>
//     )
// }
// export default About