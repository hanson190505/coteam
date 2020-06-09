function checkPosition(event) {
  let odiv = event.target
  let domToTop = odiv.getBoundingClientRect().top // dom 的顶边到视口顶部的距离
  let domToLeft = odiv.getBoundingClientRect().left // dom 的左边到视口左边的距离
  let domToBottom = odiv.getBoundingClientRect().bottom // dom 的底边到视口顶部的距离
  let x = domToLeft
  let y = domToTop - (domToBottom - domToTop)
  return [x, y]
}

function move(e, el, x, y) {
  e.preventDefault()
  document.onmousemove = e => {
    // console.log('移动')
    x += e.movementX
    y += e.movementY
    el.x(x), el.y(y)
  }
  document.onmouseup = e => {
    // console.log('停止')
    document.onmousemove = null
    document.onmouseup = null
  }
}

export {
  checkPosition,
  move
}
