let api_key = "AIzaSyAPpfiDF_QzRLExu6aIcMN5_5MVLVrSVXY";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
const key="AIzaSyCaHK52k_3Syi2FA2Qf6HqVaS1KYbJtdFQ"
async function get(){
 let viedo_search=document.getElementById("in").value; 
    console.log("aodnsfa", viedo_search)
         try{
           const api=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${viedo_search}&type=viedo_search&key=${key}&maxResults=20`
            let res = await fetch(api) 
             let data=await res.json()
            console.log(data)
            let videos=data.items;
            appendVideos(videos)
        }
       catch(err){
           console.log("error",err);
       }
      }
  getdata()
   async  function getdata(){
        try{
           
            let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${key}`
         let res = await fetch(url)
            let videos= await res.json()
            console.log(videos.items[0].snippet)
            appendVideos(videos.items)
           }
        catch(er){
            console.log("error", er)
        }
    }
      const appendVideos = (arr) =>{
      let container= document.getElementById("cont")
      container.innerHTML=null;
      console.log(arr)
      arr.map((el, i)=>{
       let div=document.createElement("div")
       let box=document.createElement("div")
       let img=document.createElement("img")
        img.src=el.snippet.thumbnails.medium.url
        img.addEventListener("click", function (){
        console.log("gaurav", i, el.id)
        localStorage.setItem("video_id",JSON.stringify(el.id))
        window.location.href="mini.html"
        })
        let name=document.createElement("h3")
        name.textContent=el.snippet.title
        box.append(img)
        div.append(box,name)
        container.append(div)
        })}











