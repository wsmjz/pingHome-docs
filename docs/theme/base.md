# 内置主题

样式是用SCSS预处理，内置了一套变量。原则上在开发过程只允许使用内置的变量，不建议另起变量名，便于实现主题在线切换功能。
如需定制主题，只需重新给变量赋值即可。

## 通用配置

通用配置是经过实践得出最合适的规范，建议任何主题都应该遵从。

### 字体
:::demo(theme-1)
```html
<template>
   <table>
      <tr>
      <th>层级</th>
      <th>变量名</th>
      <th>字体大小</th>
      <th>效果预览</th>
     </tr>
     <tr>
       <td>主标题</td>
       <td>$--font-size-extra-large</td>
       <td>30px</td>
       <td><span class="font-size-extra-large">Shouwang 3.x 文字样本</span></td>
     </tr>
     <tr>
       <td>标题</td>
       <td>$--font-size-large</td>
       <td>24px</td>
       <td><span class="font-size-large">Shouwang 3.x 文字样本</span></td>
     </tr>
     <tr>
       <td>小标题</td>
       <td>$--font-size-medium</td>
       <td>20px</td>
       <td> <span class="font-size-medium">Shouwang 3.x 文字样本</span></td>
     </tr>
    <tr>
       <td>正文（ 大 ）</td>
       <td>$--font-size-normal</td>
       <td>18px</td>
       <td> <span class="font-size-normal">Shouwang 3.x 文字样本</span></td>
     </tr>
     <tr>
       <td>正文</td>
       <td>$--font-size</td>
       <td>16px</td>
       <td><span class="font-size">Shouwang 3.x 文字样本</span></td>
     </tr>
      <tr>
       <td>正文（ 小 ）</td>
        <td>$--font-size-small</td>
        <td>14px</td>
        <td><span class="font-size-small">Shouwang 3.x 文字样本</span></td>
      </tr>
      <tr>
        <td>辅助文字</td>
        <td>$--font-size-extra-small</td>
        <td>12px</td>
        <td><span class="font-size-extra-small">Shouwang 3.x 文字样本</span></td>
      </tr>
   </table>
</template>

<script>

</script>

<style>  
  table {
     display: table;
     width: 100%;
  }
  
  .font-size-extra-large{
    font-size: 30px;
  }
  .font-size-large {
     font-size: 24px;
  }
  .font-size-medium {
     font-size: 20px;
  }
  .font-size-normal {
     font-size: 18px;
  }
  .font-size {
    font-size: 16px;
  }
  .font-size-small{
    font-size: 14px;
  }
  .font-size-extra-small{
    font-size: 12px;
  }
</style>

```
::::

### 行高
:::demo(theme-2)
```html
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

```
:::



## 默认主题配色

### 背景/前景色
### 品牌色
### 辅助色
### 中性色
### 链接颜色
### 禁用颜色

 
 <comment-comment/> 
 
 
 <comment-comment/> 
 
 
 <comment-comment/> 
 