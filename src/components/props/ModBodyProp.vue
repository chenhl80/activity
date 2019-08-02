<template>
    <div class="xl-props postion-prop">
        <div class="property-fields">
            <div class="toolbar">
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">版本更新：</p> 
                    <p class="toolbar-row-tip"><span>v_2019.07</span></p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(29)</em>修复拖动组件偶尔发生偏移值较大的问题</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(29)</em>模块左侧栏增加了组件收起功能</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(29)</em>修复了banner幻灯页面宽度发生改变发生偏移的问题</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(29)</em>点击跳转组件按新的设计稿改动，特别要注意的是跳转类型一定要和下面的链接保持一致</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(26)</em>模块化平台主题改版</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(16)</em><span>"剩余机会"</span>和<span>"奖品列表"</span>组件添加字体选择属性</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(15)</em>增加颜色选择器</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(15)</em>按钮<span>"暂存"</span>修改为<span>"保存"</span>，属性<span>"统计"</span>修改为<span>"点击事件统计"</span></p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(15)</em>组件<span>九宫格</span>默认奖品图由数字标识优化为箭头指向,<span>0</span>为奖品起始位置</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(15)</em>增加<span>组件删除</span>前需要确认提示</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(15)</em>组件<span>拖拽</span>初始位置优化</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(15)</em>右侧属性面板增加组件名称标注</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(05)</em>组件集合拆分，更新了模板</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(02)</em>修复拖拽多个相同组件点击事件统计相同的问题</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(01)</em>过滤组件，终端匹配</p>
                    <p class="toolbar-row-tip"><span>v_2019.06</span></p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(28)</em>新老<span>价格包组件</span>由原先的<span>常规</span>和<span>非常规</span>改为通过是否有<span>事件ID</span>来判断是否增加用户参与记录</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(26)</em>组件和模板做容错处理，避免组件间未知错误影响</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(26)</em>拆分九宫格抽奖组件的剩余抽奖次数，独立成剩余机会组件</p>
                    <p class="toolbar-row-tip"><span>✔</span><em>(26)</em>修复发现的已知组件bug</p>
                </div>
                <!--<div class="toolbar-wh-row">
                    <chrome-picker v-model="colors" />
                </div> --> 
            </div> 
        </div>
    </div>
</template>
<script>
export default {
    name:"ModBodyProp",
    mounted() {
        
    },
    data() {
      return {

      }
    },
    methods:{

    },
    computed: {
        
    }

}
</script>
<style scoped>

</style>


