let posts = [

{
title:"কষ্টের ক্যাপশন",
text:"জীবনটা খুব ছোট তাই কষ্ট না ধরে হাসি ধরে রাখো",
views:0,
likes:0
},

{
title:"কষ্টের ক্যাপশন",
text:"যাকে সবচেয়ে বেশি বিশ্বাস করো সেই মানুষটাই কষ্ট দেয়",
views:0,
likes:0
},

{
 title:"কষ্টের ক্যাপশন",
text:"নিজের দিকে একটু শান্ত হয়ে তাকালে মনে হয়, এত ভাঙন কোনো নদীর কূলেও নেই।",
views:0,
likes:0
},

{
title:"কষ্টের ক্যাপশন",
text:"হাসি আছে… কিন্তু সুখ নেই।",
views:0,
likes:0
},

{
title:"কষ্টের ক্যাপশন",
text:"চুপ থাকা মানে… সব ঠিক না।",
views:0,
likes:0
},

{
title:"কষ্টের ক্যাপশন",
text:"সবাই থাকে… কিন্তু কেউ থাকে না।",
views:0,
likes:0
},

{
title:"কষ্টের ক্যাপশন",
text:"যাকে চাই… সে-ই দূরে।",
views:0,
likes:0
},

{
title:"কষ্টের ক্যাপশন",
text:"ভেতরের কষ্ট… কেউ দেখে না।",
views:0,
likes:0
},

{
title:"কষ্টের ক্যাপশন",
text:"সবাইকে পেলাম… শুধু তোমাকে না।",
views:0,
likes:0
},

 {
title:"না পাওয়ার ক্যাপশন",
text:"সবাইকে পেলাম… শুধু তোমাকে না।”",
views:0,
likes:0
},

 {
title:"না পাওয়ার ক্যাপশন",
text:"“স্বপ্ন ছিল… মানুষটা ছিল না।”",
views:0,
likes:0
},

 {
title:"না পাওয়ার ক্যাপশন",
text:"“চাওয়া ছিল… পাওয়া ছিল না।”",
views:0,
likes:0
},

 {
title:"না পাওয়ার ক্যাপশন",
text:"“মন দিয়েছিলাম… মন পাইনি।”",
views:0,
likes:0
},

 {
title:"না পাওয়ার ক্যাপশন",
text:"“সব গল্প শেষ হয় না সুখে।”",
views:0,
likes:0
},

 {
title:"একাকীত্ব ক্যাপশন",
text:"“ভিড়ের মাঝেও… আমি একা।”",
views:0,
likes:0
},



];

function showPosts(){

let container=document.getElementById("postContainer");

container.innerHTML="";

posts.forEach((post,index)=>{

post.views++;

container.innerHTML+=`

<div class="post">

<h2>${post.title}</h2>

<p>${post.text}</p>

<p class="view">Views: ${post.views}</p>

<div class="buttons">

<button class="like" onclick="likePost(${index})">❤️ Like (${post.likes})</button>

<button class="share" onclick="sharePost('${post.text}')">Share</button>

</div>

</div>

`;

});

}

function likePost(i){

posts[i].likes++;

showPosts();

}

function sharePost(text){

navigator.share({

title:"FK Caption World",

text:text

});

}

document.getElementById("search").addEventListener("input",function(){

let value=this.value.toLowerCase();

let postsElements=document.querySelectorAll(".post");

postsElements.forEach(post=>{

post.style.display=post.innerText.toLowerCase().includes(value) ? "block":"none";

});

});

showPosts();
