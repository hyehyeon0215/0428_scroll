const h1 = document.querySelector("h1");

const sections = document.querySelectorAll("section");
const lis = document.querySelectorAll("ul li");

// 각 섹션의 위치에 해당하는 값을 배열로 저장한 변수
let posArr = []; //빈 배열
// offsetTop : 각 요소의 (노드 중에 엘리먼트) 세로 위치 값을 처음 시작점으로 나타냄

const base = -500;

for(let el of sections) {
    posArr.push(el.offsetTop);
}

console.log(posArr);


lis.forEach((el, index)=>{
    el.addEventListener("click",(e)=>{
        new Anim(window, {
            prop : "scroll",
            value : posArr[index],
            duration: 500
        });

        for(i=0; i<lis.length; i++) {
            lis[i].classList.remove("on");
        }

        /* for (let el of lis) el.classList.remove("on"); */

        lis[index].classList.add("on");
        // el.classList.add("on");
        // e.currentTarget.classList.add("on"); 
    })
})


window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY || window.pageYOffset;
    // 두 값은 완벽하게 똑같음
    // 다만 최신 버전 pageYOffset
    // scroll는 익스플로러에서 많이 사용하였고, 지금은 혼합해서 사용
    // 따라서 둘 다 서로의 디폴트 값으로 적어 준다
    
    h1.innerText = scroll;
    

    sections.forEach((el, index) => {
        if(scroll >= posArr[index] + base) {
            for(let el of lis) el.classList.remove("on");
            lis[index].classList.add("on");
            sections[index].classList.add("on");
            // 스크롤은 항상 추적이 가능해서 remove를 따로 안 해 줘도 됨
        }
    })


})