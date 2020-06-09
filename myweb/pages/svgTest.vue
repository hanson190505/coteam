<template>
  <div>
    <el-button type="primary" @click="svgClick">svg</el-button>

    <div class="drawing"></div>
    <el-input v-model="svgText" placeholder></el-input>

    <el-button type="primary" @click="up">up</el-button>
    <el-button type="primary" @click="right">rect</el-button>
    <el-button type="primary" @click="down">down</el-button>
    <el-button type="primary" @click="left">left</el-button>
    <input type="file" @change="previewHandle" multiple accept="image/png, image/jpeg" />
  </div>
</template>

<script>
import { SVG } from '@svgdotjs/svg.js'
import { checkPosition, move } from '../utils/svgMove'
export default {
  data() {
    return {
      circle: Object,
      text: Object,
      x: 0,
      y: 0,
      draw: Object,
      svgText: ''
    }
  },
  methods: {
    drawClick(e) {
      console.log(e)
    },
    svgClick() {
      var draw = SVG()
        .addTo('.drawing')
        .size('100%', 200)
      this.draw = draw

      var circle = draw
        .circle(100)
        .fill('red')
        .mousedown(e => {
          console.log(e)

          let [x, y] = checkPosition(e, circle)
          // console.log(this.draw)
          move(e, circle, x, y)
        })
    },
    up() {
      var rect = this.draw
        .rect(50, 100)
        .fill('#336699')
        .mousedown(e => {
          let [x, y] = checkPosition(e, rect)
          move(e, rect, x, y)
        })
    },
    right() {
      var path = this.draw.path('M0 0 A50 50 0 0 1 50 50 A50 50 0 0 0 100 100')

      path
        .fill('none')
        .move(20, 20)
        .stroke({ width: 1, color: '#ccc' })

      path.marker('start', 10, 10, function(add) {
        add.circle(10).fill('#f06')
      })
      path.marker('mid', 10, 10, function(add) {
        add
          .rect(5, 10)
          .cx(5)
          .fill('#ccc')
      })
      path.marker('end', 20, 20, function(add) {
        add.circle(6).center(4, 5)
        add.circle(6).center(4, 15)
        add.circle(6).center(12, 10)

        this.fill('#0f9')
      })
    },
    down() {},
    left() {},
    previewHandle(evt) {
      var files = evt.target.files // FileList object
      // console.log(this.draw)
      // Loop through the FileList and render image files as thumbnails.
      for (var i = 0, f; (f = files[i]); i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
          continue
        }
        // this.imageHrefs.push(f.lastModified)
        // console.log(f)
        var reader = new FileReader()

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            let d = document.getElementsByTagName('svg')[1].instance
            var image = d
              .image(e.target.result)
              .size(100, 100)
              .mousedown(function(e) {
                let [x, y] = checkPosition(e)
                move(e, this, x, y)
                // console.log(this)
                // console.log(window)
                // let currentClick = this.point(e.clientX, e.clientY)
                // console.log(currentClick.x, currentClick.y)
              })
          }
        })(f)

        // Read in the image file as a data URL.
        reader.readAsDataURL(f)
      }
    }
  }
}
</script>

<style></style>
