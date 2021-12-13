fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(newsdata=>{

    const newstext=newsdata.attachments[0].text;
    const content=document.getElementById('content');

    content.innerHTML=newstext;


})

