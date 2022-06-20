let slide = document.querySelector('.slides')
let slideImgs = document.querySelectorAll('.slides li')
let currentIdxs = 0
let slideCounts = slideImgs.length
const arrowleft = document.querySelector('.arrowleft') //이전 버튼
const arrowright = document.querySelector('.arrowright') //다음 버튼
let slideWidths = 60 //슬라이드이미지 넓이
let slideMargins = 0 //슬라이드 끼리의 마진값
makeClone() // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수
function makeClone() {
  let cloneSlide_first = slideImgs[0].cloneNode(true)
  let cloneSlide_last = slide.lastElementChild.cloneNode(true)
  slide.append(cloneSlide_first)
  slide.insertBefore(cloneSlide_last, slide.firstElementChild)
}
function initfunction() {
  slide.style.width = (slideWidths + slideMargins) * (slideCounts + 2) + 'vw'
  slide.style.left = -(slideWidths + slideMargins) + 'vw'
}
arrowright.addEventListener('click', function () {
  //다음 버튼 눌렀을때
  if (currentIdxs <= slideCounts - 1) {
    //슬라이드이동
    slide.style.left = -(currentIdxs + 2) * (slideWidths + slideMargins) + 'vw'
    slide.style.transition = `${0.5}s ease-out`; //이동 속도
  }
  if (currentIdxs === slideCounts - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slide.style.left = -(slideWidths + slideMargins) + 'vw'
      slide.style.transition = `${0}s ease-out`
    }, 500)
    currentIdxs = -1
  }
  currentIdxs += 1
});
arrowleft.addEventListener('click', function () {
  //이전 버튼 눌렀을때
  console.log(currentIdxs)
  if (currentIdxs >= 0) {
    slide.style.left = -currentIdxs * (slideWidths + slideMargins) + 'vw'
    slide.style.transition = `${0.5}s ease-out`
  }
  if (currentIdxs === 0) {
    setTimeout(function () {
      slide.style.left = -slideCounts * (slideWidths + slideMargins) + 'vw'
      slide.style.transition = `${0}s ease-out`
    }, 500)
    currentIdxs = slideCounts
  }
  currentIdxs -= 1
})

