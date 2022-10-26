class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","enteryourname")
    this.playbutton=createButton("PLAY")
    this.title=createImg("assets/title.png")
    this.greeting=createElement("h1")
  }
setElementposition(){
  this.title.position(120,100)
  this.input.position(width/2-100,height/2-90)
  this.playbutton.position(width/2-100,height/2-20)
  this.greeting.position(width/2-100,height/2-20)
}
display(){
  this.setElementposition()
  this.handlemousepressed()
}
handlemousepressed(){
  this.playbutton.mousePressed(()=>{
    this.input.hide()
    this.playbutton.hide()
    var message=`hello! ${this.input.value()}waiting for another players to join`
    this.greeting.html(message)
  })
}
}
