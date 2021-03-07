class Test {
  constructor() {
    console.log("test log")
    this.real100vh()
  }

  real100vh() {
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    })
  }
}

export default Test
