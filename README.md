# react-vue-practice-sick
大家好，我是练习时长两年半的个人练习生...

#### TODO: 登录页 PC+移动端适配 路由拦截 Mockjs 学习
# payment二合一 布局
=payment_container(flex)
= =payment_list_container(left,width)
= = =retrieve_container
= = =list_container
= = = =list_intem
= =payment_detail_container(right, width+height)
= = =tab_card_container
= = =table_container
= = = =table_header_container
= = = =table_content_container
= = = =table_content_header_container
= = = =table_content_list_container
= = = =pagination

# 定义payment二合一，交互事件
### 页面初始化：
- payment list getList (loading), handleListLoaded / LIST_LOAD_FIAL 事件订阅(回调)
- listLoaded 取第一个的数据 请求 payment detail(loading), getDetail (loading) handleDetailLoaded DETAIL_LOAD_FIAL 事件订阅(回调)

### 切换payment
- listLoaded 请求 payment detail(loading), getDetail (loading) handleDetailLoaded DETAIL_LOAD_FIAL 事件订阅(回调)

### payment detail Confirm
- 确认payment detail updateDetail handleDetailUpdate DETAIL_UPDATE_FIAL 事件订阅(回调)
### payment detail Download
- 下载 handleDownload DETAIL_DOWNLOAD_FIAL 事件订阅(回调)

### payment detail 分页 no-request
- 组件内更新即可 list - index

### 搜索payment
- retriveList(update) getList (loading), handleListUpdated / LIST_UPDATE_FIAL 事件订阅(回调)
- listLoaded 取第一个的数据 请求 payment detail(loading), getDetail (loading) handleDetailLoaded DETAIL_LOAD_FIAL 事件订阅(回调)
