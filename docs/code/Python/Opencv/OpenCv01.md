---
article: false
title: OpenCv01
order: 2
date: 2023-03-23 18:51:11
---
# OpenCV-Python教程：读取图像、显示、写入图像(imread,imshow,imwrite,waitKey)

## imread() 读取图片
```python
import cv2

print('cv2.__version__:',cv2.__version__)
img = cv2.imread('..\\lena2.jpg')  #错误路径
print('img:',img)
print('type(img):',type(img))

img = cv2.imread('..\\1.txt')  #非图片文件
print('img:',img)
print('type(img):',type(img))

img = cv2.imread('..\\lena.jpg') #图片文件，正确路径
print('img:',img)
print('type(img):',type(img))
```
运行结果：
```python
cv2.__version__: 4.5.2
img: None
type(img): <class 'NoneType'>  #错误路径
img: None
type(img): <class 'NoneType'>  #非图片文件
img: [[[128 138 225]
  [127 137 224]
  [126 136 224]
  ...
  ...
  [ 81  68 176]
  [ 81  72 183]
  [ 84  74 188]]]
type(img): <class 'numpy.ndarray'> #图片文件，正确路径
```
另外读取图像还可以在第2个位置参数写入如下3种模式：

|参数名|描述|
|---|---|
|cv2.IMREAD_COLOR	|缺省方式，读取图像为BGR 8-bit 格式.|
|cv2.IMREAD_UNCHANGED	|图像格式不做任何改变，可用在读取带alpha通道的图片|
|cv2.IMREAD_GRAYSCALE	|读取图像为转换为灰度图|

下面这个例子从3张图片中按照IMREAD_UNCHANGED模式读取，通过返回numpy数组的shape属性可以看到不同的3张图片的通道数的差异：

```python
import cv2
img = cv2.imread('..\\lena.jpg',cv2.IMREAD_UNCHANGED)
print('img.shape:',img.shape)
img2 = cv2.imread('..\\opencv-logo.png',cv2.IMREAD_UNCHANGED )
print('img2.shape:',img2.shape)
img3 = cv2.imread('..\\left05.jpg',cv2.IMREAD_UNCHANGED )
print('img3.shape:',img3.shape)
```
> 需要注意的是图像的宽度是width=cols=img.shape[1]，高度height=rows=img.shape[0]。

2. imshow()显示图像
imshow()可以用来显示图片，第1个参数为显示窗口名称，第2个参数是imread()等方法生成的图像实例。

为了观察显示效果，一般需要配合waitKey()使用，waitKey()传入的参数如果为0，会无限等待直到任何按键按下，或者传入其他数值参数表示等待时长，单位为ms，时长结束后显示图像窗口会关闭。

下面这个例子中增加了读出图像的判断，如果获取图像为None则退出，如果获取图像成功才显示。

这个例子中waitKey()入参使用了0和5000，第1次的0表示无限等待，直到按键按下，第2次表示等待5000ms后显示窗口自动关闭。

``` python
import sys
import cv2
print('cv2.__version__:',cv2.__version__)

img = cv2.imread('..\\lena.jpg')
#print('img:',img)
print('type(img):',type(img))

if img is None:
    print('读出的图像为空')
    sys.exit(-1)

cv2.imshow('lena',img)
cv2.waitKey(0)

cv2.imshow('lena2',img)
cv2.waitKey(5000)
```

> 除了前面用imshow()显示图像，还可以通过resizeWindow()等函数调整窗口大小再显示图像，如果显示的图像太多，还可以使用destroyWindow()销毁显示窗口。

