/// 2009-07-01
// Cairo university DIGUI Project
//===============================
function  ajaxpack(){
    this.basedomain="http://"+window.location.hostname
    if (window.XMLHttpRequest){
        this.ajaxobj=new XMLHttpRequest()
    }else{
    try{
        httprequest=new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e){}
}

this.filetype="txt"
this.addrandomnumber=0 //Set to 1 or 0. See documentation.

this.getAjaxRequest=function(url, parameters, callbackfunc, filetype){
    if (this.ajaxobj){
        this.filetype=filetype
        this.ajaxobj.onreadystatechange=callbackfunc
        this.ajaxobj.open('POST', url+"?"+parameters+"&ajaxcachebust="+new Date().getTime(), true)
        this.ajaxobj.send(null)
    }
}
return this
//return false;
}
//------------------------------------------------------------------------------
function callServer(ajaxpack44, url, params, callBackFunction)
{
   // alert("url="+url+" params="+params+" callBackFunction="+callBackFunction);
    ajaxpack44.getAjaxRequest(url, params, callBackFunction, "txt");
    return false;
}
//------------------------------------------------------------------------------
function addParam(param,name,value){
 //   return param +name +"="+encodeURI(value);
    return  param +"&"+name +"="+encodeURI(value);
    
}

//-------------------------------------------
    function setTreeValue(val,title,id){
       oSelect = document.getElementById(id+"s");
       while (oSelect.options.length) {
            oSelect.remove(0);
        }
        var oOption = document.createElement("option");
        oOption.value = val;
        oOption.innerHTML = title;
        oSelect.appendChild(oOption);
    }
//------------------------------------------------------------------------------
  function treeUpdate(eTree,ajaxpack11,target){
    if (ajaxpack11.ajaxobj.readyState==4){
        if (ajaxpack11.ajaxobj.status==200){
            //  log(ajaxpack11.ajaxobj.responseText);
            var response = ajaxpack11.ajaxobj.responseText.split(";");
            var splitResponse = response[0].split(",");
            id     = splitResponse[0];
            title  =  splitResponse[1];
            parent =  splitResponse[2];
            evStr  = "obj_"+eTree+"_"+id+" = "+eTree+".insertField("+eTree+".foldersTree, \"<i>"+title+"</i> \",   \"javascript:setTreeValue("+id+",\\\""+title+"\\\",\\\""+target+"\\\")\")";
            //    alert(evStr);
            eval(evStr);
            for(var i =1;i< (response.length)-1;i++) {
                splitResponse = response[i].split(",");
                id     = splitResponse[0];
                title  =  splitResponse[1];
                parent =  splitResponse[2];
                evStr  = "obj_"+eTree+"_"+id+" = "+eTree+".insertField(obj_"+eTree+"_"+parent+", \"<i>"+title+"</i> \", \"javascript:setTreeValue("+id+",\\\""+title+"\\\",\\\""+target+"\\\")\")";
                //    alert(evStr);
                eval(evStr);
            }
            this[eTree].initializeDocument();
        }
    }
}

//------------------------------------------------------------------------------
   function comboUpdate(oSelect,ajaxpack11,document,firstSelect) {
       // alert(ajaxpack11.ajaxobj.responseText);
        if (ajaxpack11.ajaxobj.readyState==4){
            if (ajaxpack11.ajaxobj.status==200){
                var response = ajaxpack11.ajaxobj.responseText.split("\n");
                while (oSelect.options.length) {
                    oSelect.remove(0);
                }
                var oOption = document.createElement("option");
                oOption.value = "NON";
                oOption.innerHTML =firstSelect
                oSelect.appendChild(oOption);

                for(var i =0;i< (response.length)-1;i++) {
                    var splitResponse = response[i].split(",");
                    newValue = splitResponse[0];
                    newElem =  splitResponse[1];
                    var oOption = document.createElement("option");
                    oOption.value = newValue;
                    oOption.innerHTML = newElem;
                    oSelect.appendChild(oOption);
                }
            }
        }
    }
 function comboUpdateIndexed(oSelect, responseText, ajaxpack11, document, firstSelect) {
                 //alert("****");
                 var response = responseText.split("\n");
                //  alert(oSelect.options.length);
 
                while (oSelect.options.length) {
                    oSelect.remove(0);
                }
                var oOption = document.createElement("option");
                oOption.value = "NON";
                oOption.innerHTML =firstSelect
                oSelect.appendChild(oOption);

                for(var i =0;i< (response.length)-1;i++) {
                    var splitResponse = response[i].split(",");
                    newValue = splitResponse[0];
                    newElem =  splitResponse[1];
                    var oOption = document.createElement("option");
                    oOption.value = newValue;
                    oOption.innerHTML = newElem;
                    oSelect.appendChild(oOption);
                }       
    }
//------------------------------------------------------------------------------
function textUpdate(obj,ajaxpack11){
    if (ajaxpack11.ajaxobj.readyState==4){ //if request of file completed
        if (ajaxpack11.ajaxobj.status==200){ //if request was successful or running script locally
            obj.value=ajaxpack11.ajaxobj.responseText;
        }
    }
}
//------------------------------------------------------------------------------