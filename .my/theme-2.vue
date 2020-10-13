<template>
  <table>
     <tr>
      <th width="80">用途</th>
      <th width="200">变量名</th>
      <th width="80">默认值</th>
      <th>效果预览</th>
    </tr>
    <tr>
      <td>宽松</td>
       <td>$--line-height-large</td>
       <td>2em</td>
       <td class="line-height-large"><span v-for="n in 20" :key="n">文字样本</span></td>
    </tr>
    <tr>
      <td>常规</td>
       <td>$--line-height-normal</td>
       <td>1.5em</td>
       <td class="line-height-normal"><span v-for="n in 20" :key="n">文字样本</span></td>
    </tr>
    <tr>
      <td>紧凑</td>
       <td>$--line-height-small</td>
       <td>1.3em</td>
       <td class="line-height-small"><span v-for="n in 20" :key="n">文字样本</span></td>
    </tr>
      <tr>
        <td>无行高</td>
         <td>$--line-height-none</td>
         <td>1em</td>
         <td class="line-height-none"><span v-for="n in 20" :key="n">文字样本</span></td>
      </tr>
    </table>
</template>

<style>
  .line-height-large {
     line-height: 2em;
  }
  .line-height-normal {
     line-height: 1.5em;
  }
  .line-height-small {
     line-height: 1.3em;
  }
  .line-height-none {
     line-height: 1em;
  }
</style>

