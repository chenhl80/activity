
### 图片服务器需要配置Access-Control-Allow-Origin

当需要需要对canvas图片进行getImageData()或toDataURL()操作的时候，跨域问题就出来了。

图片服务器需要配置Access-Control-Allow-Origin信息，例如：

如PHP添加响应头信息，*通配符表示允许任意域名：
``` php
header("Access-Control-Allow-Origin: *");
//或者指定域名
header("Access-Control-Allow-Origin: www.xxx.com");
```
此时，Chrome浏览器就不会有Access-Control-Allow-Origin相关的错误信息了，但是，还会有其他的跨域错误信息

### canvas图片getImageData cross-origin跨域问题

对于跨域的图片，只要能够在网页中正常显示出来，就可以使用canvas的drawImage() API绘制出来。但是如果你想更进一步，通过getImageData()方法获取图片的完整的像素信息，则多半会出错：

``` 
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var img = new Image();
img.onload = function () {
    context.drawImage(this, 0, 0);
    context.getImageData(0, 0, this.width, this.height);
};
img.src = 'https://vip.itzlm.cn/images/canvas.jpg';
```
在Chrome浏览器下显示如下错误：
Uncaught DOMException: Failed to execute ‘getImageData’ on ‘CanvasRenderingContext2D’: The canvas has been tainted by cross-origin data.

如果使用的是canvas.toDataURL()方法，则会报：

Failed to execute ‘toDataURL’on’HTMLCanvasElement’: Tainted canvased may not be exported
原因其实都是一样的，跨域导致。

那有没有什么办法可以解决这个问题呢？可以试试crossOrigin属性

HTML crossOrigin属性解决资源跨域问题

在HTML5中，有些元素提供了支持CORS(Cross-Origin Resource Sharing)（跨域资源共享）的属性，这些元素包括img，video，script等，而提供的属性名就是crossOrigin属性

```
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.crossOrigin = '';
    img.onload = function () {
        context.drawImage(this, 0, 0);
        context.getImageData(0, 0, this.width, this.height);
    };
    img.src = 'https://vip.itzlm.cn/images/canvas.jpg';
```

增加一个img.crossOrigin = ''即可，虽然JS代码这里设置的是空字符串，实际上起作用的属性值是anonymous

crossOrigin可以有下面两个值：

| 关键字 | 释义 |
| :-------- | :-------- |
| anonymous | 元素的跨域资源请求不需要凭证标志设置。 |
| use-credentials | 元素的跨域资源请求需要凭证标志设置，意味着该请求需要提供凭证 |

其中，只要crossOrigin的属性值不是use-credentials，全部都会解析为anonymous，包括空字符串，包括类似'abc'这样的字符

```
img.crossOrigin = 'abc';
console.log(img.crossOrigin);    // 结果是'anonymous'
```

有一点需要注意，那就是虽然没有crossOrigin属性，和设置crossOrigin="use-credentials"在默认情况下都会报跨域出错，但是性质上却不一样，两者有较大区别。

crossOrigin兼容性

IE11+(IE Edge)，Safari，Chrome，Firefox浏览器均支持，IE9和IE10会报SecurityError安全错误

### crossOrigin属性为什么可以解决资源跨域问题？

crossOrigin=anonymous相对于告诉对方服务器，你不需要带任何非匿名信息过来。例如cookie，因此，当前浏览器肯定是安全的。

就好比你要去别人家里拿一件衣服，crossOrigin=anonymous相对于告诉对方，我只要衣服，其他都不要。如果不说，可能对方在衣服里放个窃听器什么的，就不安全了，浏览器就会阻止。

### IE10浏览器不支持crossOrigin怎么办？

我们请求图片的时候，不是直接通过new Image()，而是借助ajax和URL.createObjectURL()方法。

```
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    var url = URL.createObjectURL(this.response);
    var img = new Image();
    img.onload = function () {
        // 此时你就可以使用canvas对img为所欲为了
        // ... code ...
        // 图片用完后记得释放内存
        URL.revokeObjectURL(url);
    };
    img.src = url;
};
xhr.open('GET', url, true);
xhr.responseType = 'blob';
xhr.send();
```

此方法不仅IE10浏览器OK，原本支持crossOrigin的诸位浏览器也是支持的。

根据，根据实践发现，在IE浏览器下，如果请求的图片过大，几千像素那种，图片会加载失败，我猜是超过了blob尺寸限制。
