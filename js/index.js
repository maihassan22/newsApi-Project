let myRow =document.getElementById("myRow");
let links =document.getElementsByClassName("nav-link");
let myData=[];
getData('general');

for(var i =0 ;i<links.length;i++)
{
    links[i].addEventListener("click" , function(e)
    {
        getData(e.target.text)
    })
}

function getData(category)
{
let http = new XMLHttpRequest();
http.open("GET",`http://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=2838f392217243638070831953083246` );
http.send();
http.addEventListener("readystatechange",function(){
          
    if(http.readyState==4&&http.status==200)
    {

       myData=JSON.parse(http.response).articles;
       console.log(myData);
      displayPosts();
    }

})
}
function displayPosts()
{
    let markUp ;
    for(let i=0 ;i<myData.length;i++)
    {
        markUp+=`<div class="col-md-3">
        <div class="news text-center p-2 m-auto">
            <h5>${myData[i].title}</h5>
            <img src="${myData[i].urlToImage}" class="w-100">
            <p>${myData[i].description}</p>
             <a href="${myData[i].url}" class="btn btn-danger">See More</a>
        </div>
    </div>
`
       
    }
    myRow.innerHTML=markUp;

}


