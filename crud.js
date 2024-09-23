var form    = document.getElementById("myForm"),
    imgInput  = document.querySelector(".img"),
    file      = document.getElementById("imgInput"),
    id        = document.getElementById("id"),
    pName = document.getElementById("name"),
    category  = document.getElementById("category"),
    price     = document.getElementById("price"),
    qty     = document.getElementById("qty"),
    sDate     = document.getElementById("sDate"),
    submitBtn = document.querySelector(".submit"),
    userInfo  = document.getElementById("data"),
    modalTitle = document.querySelector("#userForm .modal-title"),
    modal      = document.querySelector("#userForm")


    let getData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []


    let isEdit = false, editId

    
    

    // showInfo()

    file.onchange = function(){
        if(file.files[0].size < 1000000){//1MB = 1000000
        var fileReader = new FileReader();
        
        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }
        fileReader.readAsDataURL(file.files[0])
    }else{
        alert("This file is too large...!");
    }
        
    }

    

    function showInfo(){
        document.querySelectorAll('.productDetails').forEach(info => info.remove())

        
        getData.forEach((element, index)=>{
            let createElement = `<tr class="productDetails">

            <td>${index +1}</td>
            <td>${element.productId}</td>
             <td><img src="${element.picture}" alt="" width="50" height="50"</td>
            <td>${element.productName }</td>
            <td>${element.productCategory}</td>
            <td>${element.productPrice} </td>
            <td>${element.productQty} </td>
            <td>${element.productDate}</td>

             <td>
                  <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.productId}','${element.productName}', '${element.productCategory}','${element.productPrice}','${element.productQty}', '${element.productDate}')" data-bs-toggle ="modal" data-bs-target="#readData"><i class="bi bi-eye-slash"></i></button>
                  <button class="btn btn-primary" onclick="editInfo(${index},'${element.picture}', '${element.productId}','${element.productName}', '${element.productCategory}','${element.productPrice}','${element.productQty}', '${element.productDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger"  onclick="deleteInfo(${index})"><i class="bi bi-trash3"></i></button>
                  
              </td>
          </tr>`

          userInfo.innerHTML += createElement 
        })
          
            
        
    }
    // showInfo()


   

    // Read all data 

    function readInfo(pic,id,name,category,price,qty,sdate){
        document.querySelector('.showImg').src = pic,
        document.querySelector("#showid").value = id,
        document.querySelector("#showname").value = name,  
        document.querySelector("#showCategory").value = category,
        document.querySelector("#showPrice").value = price,
        document.querySelector("#showQty").value = qty,
        document.querySelector("#showsDate").value = sdate
         
         

    }

    //Edit datas

    let editInfo = (index, pic,Id,Name,Category,Price,Qty,Sdate )=>{

        isEdit = true
        editId = index
        imgInput.src = pic,
        pName.value = Name,
        id.value = Id,
        category.value =Category,
        price.value = Price,
        qty.value = Qty,
        sDate.value = Sdate
    
        submitBtn.innerText = "Update"
        modalTitle.innerText = "Update the Form"
        
       

    }

   
    

    // delete data

    let deleteInfo = (index)=>{
        if(confirm("Are you sure want to delete..?")){
            getData.splice(index, 1)
            localStorage.setItem("user", JSON.stringify(getData))
            showInfo()
        }

        console.log(deleteInfo);
    }

 
    form.addEventListener('submit', (e)=>{
        e.preventDefault()

        const information = {
            picture: imgInput.src == undefined ? "./images/3081840.png" : imgInput.src,
            productId   : id.value.toUpperCase(),
            productName : pName.value.toUpperCase(),
            productCategory : category.value.toUpperCase(),
            productPrice : price.value.toUpperCase(),
            productQty : qty.value,
            productDate : sDate.value
        }

        if(!isEdit){
            getData.push(information)
        }else{
            isEdit = false
            getData[editId] = information
        }

        localStorage.setItem('user',JSON.stringify(getData))

        submitBtn.innerHTML = "Submit"
        modalTitle.innerHTML = "Fill The Form"

        showInfo()

        form.reset()

        imgInput.src = "./images/3081840.png"
        modal.style.display ="block";
        document.querySelector(".modal-backdrop").remove();

    });

    
    

    

    // <button class="btn btn-primary  onclick="editInfo(${index},'${element.picture}', '${element.productId}','${element.productName}', '${element.productCategory}','${element.productPrice}', '${element.productDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>

// same code 
// var form    = document.getElementById("myForm"),
//     imgInput  = document.querySelector(".img"),
//     file      = document.getElementById("imgInput"),
//     id        = document.getElementById("id"),
//     pName = document.getElementById("name"),
//     category  = document.getElementById("category"),
//     price     = document.getElementById("price"),
//     sDate     = document.getElementById("sDate"),
//     submitBtn = document.querySelector(".submit"),
//     userInfo  = document.getElementById("data"),
//     modalTitle = document.querySelector("#userForm .modal-title"),
//     modal      = document.querySelector("userForm")


//     let getData = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []

//     let isEdit = false, editId

//     // showInfo()

//     file.onchange = function(){
//         if(file.files[0].size < 1000000){//1MB = 1000000
//         var fileReader = new FileReader();
        
//         fileReader.onload = function(e){
//             imgUrl = e.target.result
//             imgInput.src = imgUrl
//         }
//         fileReader.readAsDataURL(file.files[0])
//     }else{
//         alert("This file is too large...!");
//     }
        
//     }

//     function showInfo(){
//         // document.querySelectorAll('.productDetails').forEach(info => info.remove())
//         getData.forEach((element, index)=>{
//             let createElement = `<tr class="productDetails">

//             <td>${index +1}</td>
//             <td>${element.productId}</td>
//              <td><img src="${element.picture}" alt="" width="50" height="50"</td>
//             <td>${element.productName }</td>
//             <td>${element.productCategory}</td>
//             <td>${element.productPrice}</td>
//             <td>${element.productDate}</td>

//              <td>
//                   <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.productId}','${element.productName}', '${element.productCategory}','${element.productPrice}', '${element.productDate}')" data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye-slash"></i></button>
//                   <button class="btn btn-primary  onclick="editInfo(${index},'${element.picture}', '${element.productId}','${element.productName}', '${element.productCategory}','${element.productPrice}', '${element.productDate}')" data-bs-toggle="modal" data-bs-target="#userForm"><i class="bi bi-pencil-square"></i></button>
//                   <button class="btn btn-danger"  onclick="deleteInfo(${index}")><i class="bi bi-trash3"></i></button>
                  
//               </td>
//           </tr>`

//           userInfo.innerHTML += createElement
//         })
          
            
        
//     }
//     // showInfo()


//     function readInfo(pic,id,name,category,price,sdate){
//         document.querySelector('.showImg').src = pic,
//         document.querySelector("#showid").value = id,
//         document.querySelector("#showname").value = name,  
//         document.querySelector("#showCategory").value = category,
//         document.querySelector("#showPrice").value = price,
//         document.querySelector("#showsDate").value = sdate
         
         

//     }

//     function editInfo(index, pic,Id,Name,Category,Price,Sdate ){

//         isEdit = true
//         editId = index
//         imgInput.src = pic,
//         id.value = Id,
//         name.value = Name,
//         category.value = Category,
//         price.value = Price,
//         sDate.value = Sdate

//         submitBtn.innerHTML = "Update"
//         modalTitle.innerHTML = "Update the item"

//     }

//     // let deleteInfo = (index)=>{
//     //     if(confirm("Are you sure want to delete..?")){
//     //         getData.splice(index, 1)
//     //         localStorage.setItem("user", JSON.stringify(getData))
//     //         showInfo()
//     //     }

//     //     console.log(deleteInfo);
//     // }

 
//     form.addEventListener('submit', (e)=>{
//         e.preventDefault()

//         const information = {
//             picture: imgInput.src == undefined ? "./images/3081840.png" : imgInput.src,
//             productId   : id.value.toUpperCase(),
//             productName : pName.value.toUpperCase(),
//             productCategory : category.value.toUpperCase(),
//             productPrice : price.value.toUpperCase(),
//             productDate : sDate.value
//         }

//         if(!isEdit){
//             getData.push(information)
//         }else{
//             isEdit = false
//             getData[editId] = information
//         }

//         localStorage.setItem('user',JSON.stringify(getData))

//         submitBtn.innerHTML = "Submit"
//         modalTitle.innerHTML = "Fill The Form"

//         showInfo()

//         form.reset()

//         imgInput.src = "./images/3081840.png"
//         modal.style.display ="none";
//         document.querySelector(".modal-backdrop").remove();

//     });