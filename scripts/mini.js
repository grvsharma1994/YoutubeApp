let x = JSON.parse(localStorage.getItem("video_id"))
 let iframe=document.createElement("iframe");
iframe.setAttribute("id", "iframe");
 iframe.src=`https://www.youtube.com/embed/${x}`
 iframe.height="70%";
 iframe.width="70%";
 iframe.setAttribute("allowfullscreen","true");
  document.getElementById("cont").append(iframe);