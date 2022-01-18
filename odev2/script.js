// Document Objectlerin tanımlanması
let ekle = document.querySelector("#liveToastBtn") 
let listDOM = document.querySelector("#list") 
let taskDOM = document.querySelector("#task") 
let inList = document.getElementsByTagName("li")

// Ekle butonu click dinleme

ekle.addEventListener('click', elemanEkle)  

//ELEMAN EKLEME
function elemanEkle() {
    //Boş eleman eklemeyi engelleme ve duruma göre toast bildirimi çıkarma
    if (taskDOM.value.trim() == "")  { 
    $(".error").toast("show") 
    } 
    // Boş eleman gönderilmediyse eleman ekleme sürecini başlatma
     else {
    $(".success").toast("show")
    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM)
    liDOM.innerHTML = task.value
    taskDOM.value = ""
    //saveList(liDOM.innerHTML)
   //Yeni eklenen elemenlara X butonu ve checked özellikleri eklenmesi
     liDOM.onclick = check;
    let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeButton
        liDOM.append(closeButton)
        listDOM.append(liDOM)
       
        }
}    

//FONKSİYONLAR 

//toggle ile tıklanmadan sonra checked olacak tekrar tıklayınca before özelliğine  gececek şekilde css sınıf ataması fonk.
function check(){
    this.classList.toggle("checked")
  }
  
  // Butonun bulunduğu üst sınıf olan listedeki elemanı .remove ile sildirme fonk.
  function removeButton(){
    this.parentElement.remove()
  }
  
  
// Localstorage a eleman ekleme

// function saveList(list) {
//         localStorage.setItem(`eleman ${localStorage.length+1}`,list)
//     }
//     storage.clear()