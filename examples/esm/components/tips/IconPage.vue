<template>
  <div class="icon">
    <h2>VUEFE 字体图标</h2>
    <h3>示例</h3>
    <vuefe-row gutter="8" v-for="(type, typeIndex) in types" :key="typeIndex">
      <vuefe-col span="8" v-for="(iconName, iconIndex) in type" :key="iconIndex">
        <h3>{{ iconName }}</h3>
        <p><vuefe-icon :type="iconName" className="icon-page"></vuefe-icon></p>
      </vuefe-col>
    </vuefe-row>
    <h3>API</h3>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="25%">属性</th>
          <th width="30%">说明</th>
          <th width="20%">类型</th>
          <th width="25%">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>type</td>
          <td>图标的名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h3>注册的方法</h3>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="33%">事件名</th>
          <th width="33%">说明</th>
          <th width="33%">返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click(icon-click 依然能用)</td>
          <td>点击触发。并且是阻止冒泡。</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "IconPage",
  data() {
    return {
      types: [
        ['028', '058', '024'],
      ],
    };
  },
};
</script>
<style lang="scss">
.table td {
  border-top: 1px solid #dcdcdc;
  padding: 10px 0;
}

.icon {
  text-align: center;

  &-page {
    color: #19efef;
  }
}
</style>
