import { gsap, TimelineMax, Power1, Power4 } from "gsap"
gsap.registerPlugin()

class AppearElements {
  constructor() {
    this.body = document.querySelector("body")
    this.preloader = document.querySelector(".preloader")
    this.tlShowElements = new TimelineMax({})

    this.events()
  }

  events() {
    document.addEventListener("DOMContentLoaded", () => {
      window.onload = () => {
        window.requestAnimationFrame(() => {
          this.showElements()
        })
      }
    })
  }

  showElements() {
    // this.tlShowElements.from(".preloader__cover", { duration: 1.5, x: "200%", ease: Power1.easeOut })
    this.tlShowElements.to(".preloader__outer-circle", { duration: 0.5, opacity: 0, ease: Power4.easeOut })
    this.tlShowElements.to(".preloader", { duration: 1, opacity: 0, ease: Power4.easeOut })
    this.tlShowElements.from(".hero", { duration: 1, y: "-80%", opacity: 0, ease: Power4.easeOut }, "=-0.75")
    this.tlShowElements.from(".visual", { duration: 1.5, x: "-25px", rotateY: "25deg", opacity: 0, ease: Power1.easeOut }, "=-0.25")
    this.tlShowElements.from(".cover", { duration: 0.75, scaleX: 0, opacity: 0, stagger: 0.25, ease: Power1.easeInOut }, "=-1")
    this.tlShowElements.to(".cover + .reveal", { duration: 0, opacity: 1 }, "=-0.15")
    this.tlShowElements.to(".cover", { duration: 0.75, scaleY: 0, transformOrigin: "bottom", ease: Power4.easeOut })
    this.tlShowElements.from(".form__button", { duration: 0.75, opacity: 0, ease: Power4.easeOut }, "=-0.25")
    this.tlShowElements.from(".form__input", { duration: 0.75, width: 0, paddingLeft: 0, ease: Power4.easeOut })
    this.tlShowElements.from(".form__label", { duration: 0.75, opacity: 0, ease: Power4.easeOut }, "=-0.75")
    this.tlShowElements.from(".socials__ic", { duration: 0.75, opacity: 0, x: "20px", stagger: 0.2, ease: Power4.easeOut }, "=-0.75")
    // setTimeout(() => {
    //   this.body.classList.remove("scroll-disabled")
    // }, 500)
    setTimeout(() => {
      this.preloader.remove()
    }, 2000)
  }
}

export default AppearElements
