<template>
  <div>
    <svg
      ref="svg"
      width="100%"
      height="100%"
      viewBox="0 0 171 57"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
      id="custom-svg"
    >
      <path
        v-for="(path, index) in paths"
        :key="index"
        :d="path.d"
        :style="path.style"
      />
      <!-- <path
      :d=path.d
      :style=path.style
    />
    <path
      d="M166.575,5.409c0,-1.422 -1.153,-2.574 -2.574,-2.574c-13.545,0 -77.315,0 -113.648,0c-6.766,0 -13.255,2.687 -18.039,7.471c-4.784,4.784 -7.471,11.273 -7.471,18.039c0,0.001 0,0.002 0,0.003c0,6.766 2.687,13.255 7.471,18.039c4.784,4.784 11.273,7.471 18.039,7.471c36.333,0 100.103,0 113.648,0c1.421,0 2.574,-1.152 2.574,-2.574c0,-8.729 0,-37.146 0,-45.875Zm-116.567,5.93c9.387,0 17.008,7.621 17.008,17.007c0,9.387 -7.621,17.008 -17.008,17.008c-9.387,0 -17.008,-7.621 -17.008,-17.008c0,-9.386 7.621,-17.007 17.008,-17.007Z"
      style="fill:#d7d7d9;stroke:#000;stroke-width:0.1px;"
      />-->
      <text :x="textX" :y="textY" :style="textStyle" @mousedown="textMove">
        {{ textLogo }}
      </text>
      <image
        v-for="item in imageHrefs"
        :key="item"
        :x="imageX"
        :y="imageY"
        :height="imageHeight"
        @mousedown="move"
        :id="item"
        @click="imageClick"
        @mousemove="imageMouseenter"
        :style="svgImageStyle"
      />
    </svg>
    <el-button type="primary" @click="xyAdd">+</el-button>
    <el-button type="primary" @click="xyRed">-</el-button>
    <!-- <input type="file" id="fileElem" accept="image/png" @change="handleImage(files)" /> -->
    <el-upload
      class="upload-demo"
      ref="upload"
      action="#"
      accept="image/png"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">select</el-button>
      <div slot="tip" class="el-upload__tip">only png</div>
    </el-upload>
    <input
      type="file"
      @change="previewHandle"
      multiple
      accept="image/png, image/jpeg"
    />
    <img id="preview-img" />
    <output id="list"></output>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paths: [
        {
          d:
            'M127.559,1.835l-120.787,0c-0.979,0 -1.772,0.793 -1.772,1.771c0,8.169 0,42.147 0,50.315c0,0.979 0.793,1.772 1.772,1.772c15.042,0 120.787,0 120.787,0l0,-53.858Z',
          style: {
            fill: 'none',
            stroke: '#000',
            strokeWidth: '0.1px'
          }
        },
        {
          d:
            'M166.575,5.409c0,-1.422 -1.153,-2.574 -2.574,-2.574c-13.545,0 -77.315,0 -113.648,0c-6.766,0 -13.255,2.687 -18.039,7.471c-4.784,4.784 -7.471,11.273 -7.471,18.039c0,0.001 0,0.002 0,0.003c0,6.766 2.687,13.255 7.471,18.039c4.784,4.784 11.273,7.471 18.039,7.471c36.333,0 100.103,0 113.648,0c1.421,0 2.574,-1.152 2.574,-2.574c0,-8.729 0,-37.146 0,-45.875Zm-116.567,5.93c9.387,0 17.008,7.621 17.008,17.007c0,9.387 -7.621,17.008 -17.008,17.008c-9.387,0 -17.008,-7.621 -17.008,-17.008c0,-9.386 7.621,-17.007 17.008,-17.007Z',
          style: {
            fill: '#d7d7d9',
            stroke: '#000',
            strokeWidth: '0.1px'
          }
        }
      ],
      textLogo: 'Logo',
      textX: 90,
      textY: 30,
      textStyle: {
        fontFamily: 'Times New Roman',
        fontSize: '24',
        fill: '#0000ff'
      },
      imageX: 0,
      imageY: 0,
      imageHeight: '50%',
      imageHeightNum: 50,
      imageHref: '',
      imageHrefs: [],
      // imageHref: '/Users/zhangsha/Desktop/hanson/web_image/index_banner_3.png',
      fileList: [],
      svgImageStyle: {
        cursor: ''
      }
    }
  },
  methods: {
    xyAdd(e) {
      console.log(e)
      console.log(this.$refs.svg.getElementsByTagName('text'))

      if (this.imageHeightNum >= 100) {
        console.log('不能再加了')
      } else {
        this.imageHeight = (this.imageHeightNum += 5).toString() + '%'
      }
    },
    xyRed() {
      if (this.imageHeightNum <= 5) {
        console.log('不能再减了')
      } else {
        this.imageHeight = (this.imageHeightNum -= 5).toString() + '%'
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    textMove(e) {
      e.preventDefault()
      document.onmousemove = e => {
        this.textX += e.movementX / 10
        this.textY += e.movementY / 10
      }
      document.onmouseup = e => {
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    move(e) {
      // let odiv = e.target //获取目标元素
      // let domToTop = odiv.getBoundingClientRect().top // dom 的顶边到视口顶部的距离
      // let domToLeft = odiv.getBoundingClientRect().left // dom 的左边到视口左边的距离
      // let domToBottom = odiv.getBoundingClientRect().bottom // dom 的底边到视口顶部的距离
      // let domToRight = odiv.getBoundingClientRect().right // dom 的右边到视口左边的距离
      // // console.log(domToTop)
      // // console.log(e.clientY)
      // // console.log(domToLeft)
      // // console.log(e.clientX)
      // //阻止默认事件的方法,如果不阻止默认事件onmouseup会无法触发
      e.preventDefault()
      //算出鼠标相对元素的位置
      // let disX = e.clientX - this.imageX
      // let disY = e.clientY - this.imageY
      document.onmousemove = e => {
        // console.log('移动')
        // console.log(e.movementX)
        console.log(e)

        e.target.x.baseVal.value += e.movementX / 10
        e.target.y.baseVal.value += e.movementY / 10
        // console.log(e.target.x)
      }
      document.onmouseup = e => {
        // console.log('停止')
        document.onmousemove = null
        document.onmouseup = null
      }
    },
    previewHandle(evt) {
      // console.log(e.target.files)
      // let reader = ''
      // // let file = e.target.files[0],
      // //   imageType = '/^image//',
      // //   reader = ''
      // // if (!imageType.test(file.type)) {
      // //   alert('请选择图片!')
      // //   return
      // // }
      // for (var i = 0, f; (f = e.target.files[i]); i++) {
      //   if (!f.type.match('image.*')) {
      //     continue
      //   }
      // }
      // // 判断是否支持FileReader
      // if (window.FileReader) {
      //   reader = new FileReader()
      // } // IE9及以下不支持FileReader
      // else {
      //   alert('您的浏览器不支持图片预览功能，如需该功能请升级您的浏览器！')
      //   return
      // } // 读取完成
      // reader.onload = (function(theFile) {
      //   return function(e) {
      //     // Render thumbnail.
      //     var span = document.createElement('span')
      //     span.innerHTML = [
      //       '<img class="thumb" src="',
      //       e.target.result,
      //       '" title="',
      //       escape(theFile.name),
      //       '"/>'
      //     ].join('')
      //     document.getElementById('list').insertBefore(span, null)
      //   }
      // })(f)
      // // reader.onload = function(event) {
      // //   console.log(event)

      // //   // 获取图片DOM
      // //   var img = document.getElementById('preview-img') // 图片路径设置为读取的图片
      // //   img.src = event.target.result
      // //   document.getElementById('custom-svg-img').href.baseVal =
      // //     event.target.result
      // //   // console.log(document.getElementById('custom-svg-img').href.baseVal)
      // // }
      // reader.readAsDataURL(f)
      var files = evt.target.files // FileList object

      // Loop through the FileList and render image files as thumbnails.
      for (var i = 0, f; (f = files[i]); i++) {
        // Only process image files.
        if (!f.type.match('image.*')) {
          continue
        }
        this.imageHrefs.push(f.lastModified)
        console.log(f)

        var reader = new FileReader()

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
          return function(e) {
            // Render thumbnail.
            // var span = document.createElement('span')
            // span.innerHTML = [
            //   '<img class="thumb" src="',
            //   e.target.result,
            //   '" title="',
            //   escape(theFile.name),
            //   '"/>'
            // ].join('')
            // document.getElementById('list').insertBefore(span, null)
            document.getElementById(theFile.lastModified).href.baseVal =
              e.target.result
          }
        })(f)

        // Read in the image file as a data URL.
        reader.readAsDataURL(f)
      }
    },
    imageClick(e) {
      console.log(e)
      //TODO:鼠标不在图片区域的时候需要销毁事件
    },
    imageMouseenter(e) {
      console.log(e)

      let odiv = e.target //获取目标元素
      let domToTop = odiv.getBoundingClientRect().top // dom 的顶边到视口顶部的距离
      let domToLeft = odiv.getBoundingClientRect().left // dom 的左边到视口左边的距离
      let domToBottom = odiv.getBoundingClientRect().bottom // dom 的底边到视口顶部的距离
      let domToRight = odiv.getBoundingClientRect().right // dom 的右边到视口左边的距离
      console.log('domToTop', domToTop)
      console.log('domToLeft', domToLeft)
      console.log('domToBottom', domToBottom)
      console.log('domToRight', domToRight)
      //获取元素的实际大小
      let domWidth = domToRight - domToLeft
      let domHeight = domToBottom - domToTop
      console.log('元素宽:', domWidth)
      console.log('元素高:', domHeight)
      let domWidthMiddle = domWidth / 2
      let domHeightMiddle = domHeight / 2
      //获取鼠标相对元素的位置
      let mouseX = domToRight - e.clientX
      console.log('鼠标相对元素X轴位置:', mouseX)
      let mouseY = domToBottom - e.clientY
      console.log('鼠标相对元素Y轴位置:', mouseY)
      console.log(e.offsetX, e.offsetY)
      this.svgImageStyle.cursor = 'move'
      //右下
      if (domToRight - e.clientX < 50 && domToBottom - e.clientY < 50) {
        this.svgImageStyle.cursor = 'se-resize'
      }
      // // 左下
      // if (
      //   domToRight - e.clientX - domWidth > -20 &&
      //   domToBottom - e.clientY < 20
      // ) {
      //   this.svgImageStyle.cursor = 'sw-resize'
      // }
      // //右上
      // if (
      //   domToRight - e.clientX < 20 &&
      //   domToBottom - e.clientY - domHeight > -20
      // ) {
      //   this.svgImageStyle.cursor = 'ne-resize'
      // }
      // //左上
      // if (
      //   domToRight - e.clientX - domWidth > -20 &&
      //   domToBottom - e.clientY - domHeight > -20
      // ) {
      //   this.svgImageStyle.cursor = 'nw-resize'
      // }
      // //左
      // if (
      //   -20 < domToBottom - e.clientY - domHeightMiddle < 20 &&
      //   domToRight - e.clientX - domWidth > -20
      // ) {
      //   this.svgImageStyle.cursor = 'w-resize'
      // }
      // //右
      // if (
      //   -20 < domToBottom - e.clientY - domHeightMiddle < 20 &&
      //   domToRight - e.clientX < 20
      // ) {
      //   this.svgImageStyle.cursor = 'e-resize'
      // }
      // //下
      // if (
      //   -20 < domToRight - e.clientX - domWidthMiddle < 20 &&
      //   domToBottom - e.clientY < 20
      // ) {
      //   this.svgImageStyle.cursor = 'n-resize'
      // }
      // //上
      // if (
      //   -20 < domToRight - e.clientX - domWidthMiddle < 20 &&
      //   domToBottom - e.clientY - domHeight > -20
      // ) {
      //   this.svgImageStyle.cursor = 'n-resize'
      // }
    }
  }
}
</script>

<style></style>
