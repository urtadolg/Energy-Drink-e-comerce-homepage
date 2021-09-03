const menu = document.querySelector(".btnMenu");
const bestSellerItem = document.querySelectorAll('.itemBs');
const btnComprar = document.querySelectorAll('.btnBs');
const menuPanel = document.querySelector(".btnMenuPanel");


menu.addEventListener("click", () => {
  menuPanel.classList.toggle("turnOn");
});

for(let i=0;i<bestSellerItem.length;i++){
bestSellerItem[i].addEventListener('mouseover',(event)=>{
  btnComprar[i].style.backgroundColor = 'green';
})
bestSellerItem[i].addEventListener('mouseleave',(event)=>{
  btnComprar[i].style.backgroundColor = '';
})
}