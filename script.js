let tl=gsap.timeline();
tl.from('.outerBox',{
  x:-500,
  
})
tl.from('.options p',{
    y:-100,
    duration:0.5,
    stagger:0.3
},"a")
tl.from('nav .logo',{
  rotate:"180deg"
},"a")
tl.from('.options form',{
    y:-100,
    delay:0.1,
    duration:0.5
})
tl.from('.left p ',{
    x:-500,
    duration:0.2
})
tl.to('.left button',{
    scale:1,
    duration:1
})
tl.from('.right img',{
    y:"-600px",
    ease:'bounce.out',
    duration:1
    
})
const mouse=document.querySelector(".mouse");
const body=document.querySelector('body')
body.addEventListener('mousemove',function(dets){
     mouse.style.left=dets.x+"px";
     mouse.style.top=dets.y+"px";
})
const options=document.querySelectorAll(" p")
options.forEach(element => {
    element.addEventListener('mouseenter',()=>{
        gsap.to(mouse,{
             scale:3
        })
    })
    element.addEventListener('mouseleave',()=>{
        console.log("e");
        gsap.to(mouse,{
             scale:1
        })
    })
});
function getITagChild(parentElement) {
    return parentElement.querySelectorAll('i');
  }
  function getH3TagChild(parentElement) {
    return parentElement.querySelectorAll('h3');
  }
const drinks =document.querySelectorAll(".drinks div");
drinks.forEach(element => {
    let iTag = getITagChild(element);
    let H3Tag=getH3TagChild(element);
    element.addEventListener("mouseenter",()=>{
        gsap.to(element ,{
            scale:1.1,
            duration:1,
            delay:0.3
        })
        gsap.to(iTag,{
            display:"inline",
            duration:0.3
        })
        gsap.to(H3Tag,{
          display:"block",
          duration:0.3
      })
        element.classList.add("active");
    })
    element.addEventListener("mouseleave",()=>{
        gsap.to(element,{
            scale:1,
            duration:1,
        })
        gsap.to(iTag,{
          display:"none",
        })
        gsap.to(H3Tag,{
          display:"none",
        })
        element.classList.remove("active");
    })
})
const scrollContainer=document.querySelector('.drinks');
document.querySelectorAll('.right-scroll').forEach(button => {
    button.addEventListener('click', function() {
      let currentDiv = this.closest('.container');
      let nextDiv = currentDiv.nextElementSibling || scrollContainer.firstElementChild;
      if (nextDiv) {
        let nextDivPosition = nextDiv.offsetLeft-200;
        scrollContainer.scrollTo({
          left: nextDivPosition,
          behavior: 'smooth'
        });
        currentDiv.classList.remove("active")
        nextDiv.classList.add("active");
      }
    });
  });
  document.querySelectorAll('.left-scroll').forEach(button => {
    button.addEventListener('click', function() {
      let currentDiv = this.closest('.container');
      let previousDiv = currentDiv.previousElementSibling || scrollContainer.lastElementChild;
      if (previousDiv) {
        scrollContainer.scrollTo({
          left: previousDiv.offsetLeft-200,
          behavior: 'smooth'
        });
        currentDiv.classList.remove("active")
        previousDiv.classList.add("active");
      }

    });
  });


