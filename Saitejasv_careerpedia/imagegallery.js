//  let book=document.getElementById("book");
//  let ceilingfan=document.getElementById("ceilingfan");
//  let pendrive=document.getElementById("pendrive");
//  let shoe=document.getElementById("shoe");
//  let tablefan=document.getElementById("tablefan");
//  let camera=document.getElementById("camera");
let images = document.querySelectorAll("img");
let cover = document.getElementById("bookcover");
let coverimg = document.getElementById("bookcoverimg");
let close = document.querySelector("span");
let heading= document.getElementById("heading");
let rate= document.getElementById("rate");
let quantity=document.getElementById("quantity");
let button=document.getElementById("button");
let displayItems=document.getElementById('displayitemsadded');
let finalprice=document.getElementById('finalprice1');
let total=0;
let gst;
let final_price;

// let displayItems=document.getElementsByClassName("Invoice_Div");
// let cartdetails=[];
// let Itemrate=parseInt(rate);

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    popupimgdiv(`./Dom_Project_images/${index}.webp`);
    headModal(index) ;
     
  });
});

close.addEventListener("click", () => (cover.style.display = "none"));

function popupimgdiv(imageiterate) {
  cover.style.display = "flex";
  coverimg.src = imageiterate;
}
function headModal(index){
  if(index==0)
  {
  heading.innerHTML='Reasoning IQ Book For SSC CGL';
  rate.innerHTML='350';
  }
  else if(index==1)
  {
    heading.innerHTML='DSLR Camera';
    rate.innerHTML='400';
  }
  else if(index==2)
  {
    heading.innerHTML='Ceiling Fan';
    rate.innerHTML='700';
  }
  else if(index==3)
  {
    heading.innerHTML='Reasoning IQ Book For SSC CGL';
    rate.innerHTML='900';
  }
  else if(index==4)
  {
    heading.innerHTML='Reasoning IQ Book For SSC CGL';
    rate.innerHTML='500';
  }
  else if(index==5)
  {
    heading.innerHTML='Reasoning IQ Book For SSC CGL';
    rate.innerHTML='800';
  }

  else{
    console.log('id is not matched');
  }

}
//  let node=displayItems.createElement("p");
button.addEventListener("click",()=>{
  // let Itemrate=350;
  // Itemrate=parseInt(rate);
  // cartdetails=quantity.value*Itemrate;
  // displayItems.innerHTML= cartdetails;
  // console.log(cartdetails);
  let itemrate=parseInt(document.getElementById("rate").innerText);
  let qty=quantity.value;
   let cartdetails=qty*itemrate;
  console.log(parseInt(cartdetails));

  // console.log(displayItems);
  while(true){
    total=total+cartdetails;
     break;
   }
    gst=((total)*5)/100;
    final_price=total+gst;
 displayItems.innerHTML="TOTAL_PRICE_OF_ALL_ITEMS_ADDED_TO_CART:"+total;
 finalprice.innerHTML="FINAL PRICE AFTER ADDING GST(5%) TO FINAL PRICE:"+final_price;

    // Create an "P" node:
    let node = document.createElement("h3");

    // console.log(node)
    
    // Create a text node:
    let textnode = document.createTextNode("QUANTITY_OF_THAT Item*Itemprice:"+cartdetails);
    // let textnode1 = document.createTextNode("Quantity_of that Item*Itemprice:"+cartdetails);
    // let textnode2 = document.createTextNode("totalprice_of_all Items_added_to_cart:"+total);
    // let textnode3 = document.createTextNode("final Price after adding gst(5%) to all Items:"+final_price);
    
    // Append the text node to the "P" node:
    node.appendChild(textnode);
    // node.appendChild(textnode1);
    // node.appendChild(textnode2);
    // node.appendChild(textnode3);
    
    // Append the "P" node to the Invoice div:
    document.querySelector(".Invoice_Div").appendChild(node);
    // document.querySelector()

   
  // displayItems.createElement("p");
  // displayItems.innerHTML="Quantity*Itemprice:"+cartdetails;
  // console.log(rate);
  // displayItems.innerHTML=parseInt(rate);
    // node="Quantity*Itemprice:"+cartdetails;
  
    // document.getElementsByClassName("Invoice_Div").appendChild(node);

})

// displayItems.innerHTML= "item1 price:"+cartdetails;