const listBtn = document.getElementById("student-list-btn");
const buttonList = document.getElementById("btn-list");

const getData = async (endpoint = "")=>{
    const res= await fetch(`http://localhost:5000/api/${endpoint}`)
    // console.log("ok", res);
    const data = await res.json()
    console.log(data)
    return data
}



listBtn.addEventListener("click", async()=>{
    const result= await getData("students");
    console.log(result)
    result.data.map((student)=> {
        const singleBtn = document.createElement("button");
        singleBtn.innerText = student.name;
        singleBtn.addEventListener("click",()=> getData(`students/${student.id}`))
        buttonList.appendChild(singleBtn);
    })
})

// (async ()=>{
//     const res= await fetch(`http://localhost:5000/api/students/6020f1f87620c940309689ae`)
//     console.log("ok", res);
//     const data = await res.json()
//     console.log(data)
//     // return data
// })()