// Animação da página ao da Scroll

//debounce function
function debounce(func, wait, immediate) {
	var timeout
	return function() {
		var context = this, args = arguments
		var later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		var callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	};
};

const target = document.querySelectorAll("[data-anime]")
const animationClass = "animate"

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3)/ 4)
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }
  })
}
animeScroll()

if(target.length) {
  window.addEventListener("scroll", debounce( function() {
    animeScroll() 
  }, 200))
}

// Mudar o header da página quando der Scroll

const header = document.querySelector("#header")
const navHeight = header.offsetHeight

window.addEventListener("scroll", function() {
	if(window.scrollY >= navHeight) {
		header.classList.add("scroll")
	} else {
		header.classList.remove("scroll")
	}
})