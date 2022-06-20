window.addEventListener("scroll",function(event){
  let scrollY = this.scrollY
  let scrollX = this.scrollX
  console.log(scrollY)
  console.log(scrollX)
  }) //좌표값얻기 함수

  const item1 = document.querySelector('.item1')
  const item2 = document.querySelector('.item2')
  const item3 = document.querySelector('.item3')
  const item4 = document.querySelector('.item4')
  const upp = document.querySelector('.upp')
  item1.addEventListener('click',function(){
    window.scrollTo(0,1000)
  })

  item2.addEventListener('click',function(){
    window.scrollTo(0,2277)
  })

  item3.addEventListener('click',function(){
    window.scrollTo(0,3138)
  })

  upp.addEventListener('click',function(){
    window.scrollTo(0,0)
  })