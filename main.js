const navMenu = document.getElementById("nav-menu"); 
 const navMenu2 = document.getElementById("nav-menu-2");
const navLink= document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[-100%]");
    navMenu.classList.toggle("left-0");
    navMenu2.classList.toggle("top-[-100%]");
    navMenu2.classList.toggle("top-0");
    hamburger.classList.toggle("ri-close-large-line");
});
navLink.forEach(link => {
    link.addEventListener("click", ()=> {
    navMenu.classList.toggle("left-[-100%]");
    navMenu.classList.toggle("left-0");
     navMenu2.classList.toggle("top-[-100%]");
     navMenu2.classList.toggle("top-0");
    hamburger.classList.toggle("ri-close-large-line");
    });
})
// Carousel
let onSlide =false;
window.addEventListener("load", () =>{
    autoSlide();
    const buttonPrev = document.querySelector(".carousel_button_prev")
    const buttonNext = document.querySelector(".carousel_button_next")

    buttonNext.addEventListener("click", ()=> slide(getItemActiveIndex() +1));
    buttonPrev.addEventListener("click", ()=> slide(getItemActiveIndex() -1));
})
function autoSlide() {
    setInterval(() => {
        slide(getItemActiveIndex() +1);
    }, 5000) //slide speed=5s
}
function slide(toIndex) {
    if(onSlide) return;
    onSlide= true;
    const itemsArray= Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item_active");
    const itemActiveIndex= itemsArray.indexOf(itemActive);
    let newItemActive =null;

    if(toIndex > itemActiveIndex) {      
        if(toIndex >= itemsArray.length) {
        toIndex = 0;
    }

    newItemActive = itemsArray[toIndex]
    newItemActive.classList.add("carousel_item_pos_next");
    setTimeout(() => {
        newItemActive.classList.add("carousel_item_next");
        itemActive.classList.add("carousel_item_next");

    }, 20);
    } else {
          if(toIndex < 0) {
        toIndex = itemsArray.length -1;
    }
    newItemActive = itemsArray[toIndex]
    newItemActive.classList.add("carousel_item_pos_prev");
    setTimeout(() => {
        newItemActive.classList.add("carousel_item_prev");
        itemActive.classList.add("carousel_item_prev");

    }, 20);
    }
    newItemActive.addEventListener("transitionend", () =>{
        itemActive.className = "carousel_item"
        newItemActive.className = "carousel_item carousel_item_active"
        onSlide = false;
    }, {
        once:true
    })
}
function getItemActiveIndex() {
    const itemsArray= Array.from(document.querySelectorAll(".carousel_item"));
    const itemActive = document.querySelector(".carousel_item_active");
    const itemActiveIndex = itemsArray.indexOf(itemActive);
    return itemActiveIndex;
}


/*~~~~~~~~~~~~~~~~~~ MOUSEMOVE EFFECT~~~~~~~~~~~~~~~~~~~~~~*/
// const sections =[
//     {id: "#about", imageClass= ".background-image-about"},
//     {id: "#company", imageClass= ".background-image-company"},
// ]


function handleMouseMove(e, image) {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight

    const moveX= (x -0.5) * 50;
    const moveY= (y -0.5) * 50;

    image.style.transform = `translate(${moveX}px, ${moveY}px)`
}

// sections.forEach(section => {
//     document.querySelector(section.id).addEventListener('mousemove', (e) =>{
//     const image = document.querySelector(section.imageClass)
//     handleMouseMove(e, image)
// })
// })

document.querySelector("#about").addEventListener('mousemove', (e) =>{
    const image = document.querySelector(".background-image-about")
    handleMouseMove(e, image)
})

document.querySelector("#company").addEventListener('mousemove', (e) =>{
    const image = document.querySelector(".background-image-company")
    handleMouseMove(e, image)
})

document.querySelector("#contact").addEventListener('mousemove', (e) =>{
    const image = document.querySelector(".background-image-contact")
    handleMouseMove(e, image)
})
        
/*~~~~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~~~~~~~~*/
document.addEventListener("DOMContentLoaded", ()=> {
    const tabs = document.querySelectorAll(".process_tab");
    const tabContent = document.getElementById("tab-content");
    const tabImage = document.getElementById("tab-image");

    const contentData = {
    1: {
        title: "Acquaintance with the customer",
        paragraphs: [
            "The first thing we do is meet with our clients and talk through their goals for a future project. During this meeting, feel free to communicate your ideas and ask lots of questions.",

            "This stage is highly decisive, as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them."
        ],
        image: "assets/images/process-1.jpg"
    },

     2: {
        title: "Project Concept Development",
        paragraphs: [
            "In this stage, we develop a project concept based on the client’s preferences and ideas. We present the concept in a visual format to ensure that the client’s vision is accurately represented.",

            "This phase involves a lot of back-and-forth communication, allowing us to refine the project concept until it meets the client’s expectations."
        ],
        image: "assets/images/process-2.jpg"
    },

    3: {
        title: "Working on Interior and Exterior",
        paragraphs: [
            "Once the concept is approved, we start working on the interior and exterior designs. We make sure that all design elements are in harmony, creating a cohesive and aesthetically pleasing result.",

            "We present detailed plans and 3D visualizations to help the client understand how the final project will look and feel."
        ],
        image: "assets/images/process-3.jpg"
    },

    4: {
        title: "Finishing Touches for Your Future Home",
        paragraphs: [
            "The final stage involves adding the finishing touches to the project. We ensure that every detail is perfect and meets the client’s standards.",

            "This is where we add the final flourishes that turn a house into a home, making sure it is ready for the client to move in."
        ],
        image: "assets/images/process-4.jpg"
    },
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", ()=> {
        tabs.forEach(t => t.classList.remove("process_tab-active"))

        tab.classList.add("process_tab-active")

        const tabIndex = tab.getAttribute("data-tab")

        const data = contentData[tabIndex]
        tabContent.innerHTML = `
                <h2 class="text-firstcolor">${data.title}</h2>
                <p class="text-graycolor">${data.paragraphs[0]}</p>
                <p class="text-graycolor">${data.paragraphs[1]}</p>`
       
            tabImage.src = data.image;
       
        })
    })
})

// SWIPER
const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  speed: 1000,
  spaceBetween :30,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  grabCursor: true
});

// scroll-up
const scrollUp = () =>{
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scroll >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
}

window.addEventListener('scroll', scrollUp)

// scroll active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function activeLink() {

    let current = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", activeLink);
