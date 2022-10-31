let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    },
  ];

  const cardList=document.querySelector(".cardList");
  const searchCountInfo=document.querySelector(".result-searchInfo p");
  const searchArea=document.querySelector(".searchArea");
  const addTicket=document.querySelector(".btn-addTicket");

  let searchCount=0;
//初始值載入
  init();

  
//初始值
  function init(){
    let listInfo="";
    data.forEach(function(item,index){
        let str=`<li class="card-item">
        <div class="card-img">
            <img src=${item.imgUrl} alt="">
        
        <div class="card-location">
            <p>${item.area}</p>
        </div>
        <div class="card-star">
            <p>${item.rate}</p>
        </div>
    </div>
        <div class="card-content">
        <div class="card-title">
            <h1>${item.name}</h1>
        </div>
        <p>${item.description}</p>
        <div class="care-program">
            <p>
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="card-num"> ${item.group} </span> 組
              </p>
            <p class="card-price">
              TWD <span class="card-item-price">$${item.price}</span>
            </p>
        </div>
    </div>
    </li>`;
      listInfo+=str;
       
    })
    cardList.innerHTML=listInfo;
   searchCountInfo.textContent=`本次搜尋共${data.length}筆資料`;

  }

  //地區搜尋監聽
  searchArea.addEventListener("change",function(e){
    console.log(e.target.value);
    let content="";
    let count=0;
    data.forEach(function(item,index){
     
      if(e.target.value=="全部地區"){
        content+=`<li class="card-item">
        <div class="card-img">
            <img src=${item.imgUrl} alt="">
        
        <div class="card-location">
            <p>${item.area}</p>
        </div>
        <div class="card-star">
            <p>${item.rate}</p>
        </div>
    </div>
        <div class="card-content">
        <div class="card-title">
            <h1>${item.name}</h1>
        </div>
        <p>${item.description}</p>
        <div class="care-program">
            <p>
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="card-num"> ${item.group} </span> 組
              </p>
            <p class="card-price">
              TWD <span class="card-item-price">$${item.price}</span>
            </p>
        </div>
    </div>
    </li>`;
    count++;

      }
      else if (e.target.value==item.area)
      {
        content+=`<li class="card-item">
        <div class="card-img">
            <img src=${item.imgUrl} alt="">
        
        <div class="card-location">
            <p>${item.area}</p>
        </div>
        <div class="card-star">
            <p>${item.rate}</p>
        </div>
    </div>
        <div class="card-content">
        <div class="card-title">
            <h1>${item.name}</h1>
        </div>
        <p>${item.description}</p>
        <div class="care-program">
            <p>
                <span><i class="fas fa-exclamation-circle"></i></span>
                剩下最後 <span id="card-num"> ${item.group} </span> 組
              </p>
            <p class="card-price">
              TWD <span class="card-item-price">$${item.price}</span>
            </p>
        </div>
    </div>
    </li>`;
    count++;
      }

    })
    cardList.innerHTML=content;
    searchCountInfo.textContent=`本次搜尋共${count}筆資料`;
  })

//新增套票
  addTicket.addEventListener("click",function(e){
    console.log("2");
    const ticketName=document.querySelector(".ticketName");
    const ticketImgUrl=document.querySelector(".ticketImgUrl");
    const ticketArea=document.querySelector(".ticketArea ");
    const ticketAmount=document.querySelector(".ticketAmount");
    const ticketGroup=document.querySelector(".ticketGroup");
    const ticketStar=document.querySelector(".ticketStar");
    const ticketDescription=document.querySelector(".ticketDescription");
    const cardInfo={};
    cardInfo.Id=data.length;
    cardInfo.name=ticketName.value;
    cardInfo.imgUrl=ticketImgUrl.value;
    cardInfo.area=ticketArea.value;
    cardInfo.price=ticketAmount.value;
    cardInfo.group=ticketGroup.value;
    cardInfo.rate=ticketStar.value;
    cardInfo.description=ticketDescription.value;
    data.push(cardInfo); 
    init();
  })
