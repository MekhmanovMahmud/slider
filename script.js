const slides = document.querySelectorAll('.slide'),
   prev = document.getElementById('btn-prev'),
   next = document.getElementById('btn-right'),
   dots = document.querySelectorAll('.dot')

let index = 0


const funRel = ind => {
   activeSlide(ind)
   activeDot(ind)
}

const activeSlide = n => {
   for (slide of slides) {
      slide.classList.remove('active')
   }
   slides[n].classList.add('active')

}

const activeDot = n => {
   for (dot of dots) {
      dot.classList.remove('active')
   }
   dots[n].classList.add('active')
}

const nextSlide = () => {
   if (index == slides.length - 1) {
      index = 0
      funRel(index)
   } else {
      index++
      funRel(index)
   }
}


const prevSlide = () => {
   if (index == 0) {
      index = slides.length - 1
      funRel(index)
   } else {
      index--
      funRel(index)
   }
}

dots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
      index = indexDot
      funRel(index)
   })
})

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)