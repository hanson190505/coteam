# Mac OS X 配置环境变量 
/etc/profile；/etc/bashrc 是针对系统所有用户的全局变量，只有root用户才能修改这两个文件，对一般用户来说是他们是只读的。一般用户要想修改它们，可以在命令前加sudo，意思是以Root身份执行，比如：sudo vi /etc/profile  ，然后按照提示输入密码即可。

因此，对于一般用户而言，通常我们建议去修改~/.bash_profile来设置环境变量，它是用户级的设置，只对当前用户有效。
#### 操作步骤:
* 打开Terminal（终端）
* 输入：
`vi ~/.bash_profile`
* 按 i 设置PATH：`export PATH=/usr/local/mysql/bin:$PATH`
* 按esc输入：:wq    //保存并退出vi
* 修改立即生效：`source ~/.bash_profile`
* 查看环境变量的值：`echo $PATH`
#### 注意：
* ~/.bash_profile中有个点
* 如果是新增环境变量或者是修改环境变量的值，都需要source一下才能立即生效。如果是删除一个环境变量，必须输入exit以logout当前shell，然后再重新打开一个新的shell并login才能生效。
