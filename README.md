LocalStorage_XSSLAB_Payload

>安全龙(anquanlong.com)专注做企业网络安全服务与网络安全培训!致力于为企业培养网络安全人才、健全网络安全保障体系、提高网络安全保护能力的网络安全综合服务平台。

### 场景说明
这个用于在XSS中获取LocalStorage全部参数信息的XSS_Payload；

一些场景参考：
1、在RESTful WEB API或者H5运用，弃用cookie，使用jwt或者别的技术手段来做API身份验证，使用本地存储LocalStorage来做身份存储。
2、通常前后端分离的WEBAPP SAP运用 VUE中XSS攻击与防御研究。


### 脚本说明
***handleLocalStorage_TestData.js*** 生成实验要用的本地存储LocalStorage参数数据
***GetLocalStorage_Payload.js*** 遍历获取本地存储LocalStorage全部参数数据

### 实验步骤
1、通过GetLocalStorage_Payload.js构建一个GetLocalStorageData()方法，遍历出LocalStorage全部参数数据，然后赋值到document.body.appendChild(img)方法url访问参数，在body中展示img，形成展示访问。
2、通过读取web服务器访问日志，从而获得LocalStorage全部参数数据。

#### Step1 handleLocalStorage_TestData
![Step1.png](https://img.anquanlong.com/public/15786219763760.png)

#### Step2 GetLocalStorage_Payload BY webservice log

![Step2.png](https://img.anquanlong.com/public/15786219854326.png)