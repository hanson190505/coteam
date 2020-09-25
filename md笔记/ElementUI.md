## ElementUI

### table全表关键字筛选

``````javascript
// 定义search属性与input框双向绑定
<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
//table的:data通过handlePage(page, size)获取表格数据
// handlePage集成表格分页功能
handlePage(page, size) {
​      const search = this.search
​      *if* (search) {
​        *// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。*
​        *// 注意： filter() 不会对空数组进行检测。*
​        *// 注意： filter() 不会改变原始数组。*
​        *return* this.tableData
​          .filter(data => {
​            *// some() 方法用于检测数组中的元素是否满足指定条件;*
​            *// some() 方法会依次执行数组的每个元素：*
​            *// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;*
​            *// 如果没有满足条件的元素，则返回false。*
​            *// 注意： some() 不会对空数组进行检测。*
​            *// 注意： some() 不会改变原始数组。*
​            *return* Object.keys(data).some(key => {
​              *// indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；*
​              *// 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。*
​              *return* (
​                String(data[key])
​                  .toLowerCase()
​                  .indexOf(search) > -1
​              )
​            })
​          })
​          .slice((page - 1) * size, page * size * 1)
​      }
​      *return* this.tableData.slice((page - 1) * size, page * size * 1)
​    }
``````

- 关键字筛选代码高亮

  ```vue
  // js代码
  showDate(val) {
  		val = val + '';
  		if (val.indexOf(this.search) !== -1 && this.search !== '') {
  				return val.replace(this.search, '<font color="#409EFF">' + this.search + '</font>')
  		} else {
  				return val
  		}
  }
  // 模板设计
  <el-table-column label="订单编号" align="center" width="120">
    <template slot-scope="scope">
  <span class="col-cont" v-html="showDate(scope.row.order_number)"></span>
    </template>
  </el-table-column>
  
  ```

### 错误集锦

- 标点错误.....

```python
  File "/Users/zhangsha/Desktop/vue-front-backend/env/lib/python3.7/site-packages/rest_framework/views.py", line 272, in get_authenticators
    return [auth() for auth in self.authentication_classes]
TypeError: 'type' object is not iterable
[19/Jan/2020 12:58:19] "POST /suborders/?token=f5509a1111be4d0b911b14bd7231608a HTTP/1.1" 500 89193
# 是自定义authentication_classes的时候没有加逗号,它只接收元祖或列表
authentication_classes = GetTokenAuthentication,
```

- POST http://127.0.0.1:8000/orders/?token=2f2e12dbb8bc46ac84958a37c8a32eba 400 (Bad Request)

  ```vue
  request({
              url: 'orders/',
              method: 'POST',
              params: { token: window.sessionStorage.getItem('token') },
              headers: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              data: qs.stringify(this.orderData)
            })
              .then(res => {
                resolve(res)
                console.log(res)
              })
              .catch(err => {
                // 请求失败的返回信息不能直接在err中拿,要向下面这样拿到
                console.log(err.response.request)
              })
  ```

  

- vuex刷新页面store数据丢失问题

- store中的state数据存放在内存中,页面刷新即会销毁,思路是在页面刷新前把数据存储在sessionStorage中,在刷新后取出即可

  ```vue
  <template>
    <div id="app">
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    created() {
      if (sessionStorage.getItem('store')) {
        this.$store.replaceState(
          Object.assign(
            {},
            this.$store.state,
            JSON.parse(sessionStorage.getItem('store'))
          )
        )
      }
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener('beforeunload', () => {
        sessionStorage.setItem('store', JSON.stringify(this.$store.state))
      })
    }
  }
  </script>
  
  <style></style>
  ```

  