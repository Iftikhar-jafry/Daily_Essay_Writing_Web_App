var flag=false;
var readSection=getID("read");
var passwordTrue=false;

// localStorage.setItem("dailyWriting",readSection.innerHTML);



function save()
{
    var div1=document.createElement("div");
        div1.setAttribute("class","individual");
    var div2=document.createElement("div");
        div2.setAttribute("class","datetime");
    var h2=document.createElement("h2");
        h2.setAttribute("class","title")
    var p=document.createElement("p");
        p.setAttribute("class","para")
    var btn=document.createElement("button");
        btn.setAttribute("class","delete");
        btn.innerHTML="Delete";
    getID("read").appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(h2);
    div1.appendChild(p);
    div1.appendChild(btn);

    div2.innerHTML=formatDate();
    h2.innerHTML=getID("title").value;
    p.innerHTML=getID("textarea").value

    localStorage.setItem("dailyWriting",readSection.innerHTML)
    getID("title").value="";
    getID("textarea").value="";
}


readSection.addEventListener("click",(e)=>{
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove(); //
    }
    localStorage.setItem("dailyWriting",readSection.innerHTML)

});


const formatDate = () => {
    const today = new Date();
  
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(today.getFullYear()).slice(-2); // Get last two digits of the year
    const weekday = today.toLocaleString('en-US', { weekday: 'long' }); // Get the full day name
  
    return `${day}/${month}/${year} ${weekday}`;
  };

function switchRW()
{
    if(flag==false)
    {
        
        if(passwordTrue==false)
        {
            ToShowHideElement("write","none");
            ToShowHideElement("read","none");
            ToShowHideElement("part2","block");
        }
        else
        {
            ToShowHideElement("write","none");
            ToShowHideElement("read","block");
            ToShowHideElement("part2","none");
        }
        getID("switchRW").innerHTML="Switch to Write";
        flag=true;
        readSection.innerHTML=localStorage.getItem("dailyWriting");

    }
    else 
    {
        ToShowHideElement("write","block")
        ToShowHideElement("read","none")
        ToShowHideElement("part2","none")
        getID("switchRW").innerHTML="Switch to Read";
        flag=false;
    }
}

function check()
{
    if(getID("pass").value=="iftikhar")
    {
        ToShowHideElement("write","none");
        ToShowHideElement("read","block");
        ToShowHideElement("part2","none")
        getID("pass").value="";
        passwordTrue=true;
    }
    else
    {
        getID("error").innerHTML="Wrong Password";
        getID("pass").value="";
    }
}

function show()
{
    ToShowHideElement("read","none");
    ToShowHideElement("part2","none");
    readSection.innerHTML=localStorage.getItem("dailyWriting");
}
function ToShowHideElement(id,mode)
{
    getID(id).style.display=mode;
}
function getID(id)
{
    return document.getElementById(id);
}
show();