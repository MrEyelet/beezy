class Test {
  constructor() {
    console.log("test log")
    this.pageLoad()
    this.resizeScreen()
  }

  real100vh() {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }
  resizeScreen() {
    window.addEventListener("resize", () => {
      this.real100vh()
    })
  }
  pageLoad() {
    window.addEventListener("load", () => {
      this.real100vh()
    })
  }
}

export default Test
