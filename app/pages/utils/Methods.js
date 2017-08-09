/**
 * Created by anye on 2017/7/17.
 */
import {
    StyleSheet,

} from 'react-native';

const HORIZ_WIDTH = 200;
const ITEM_HEIGHT = 72;
const HEADER = {height: 30, width: 100};
const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;

export  function getItemLayout(data: any, index: number, horizontal?: boolean) {
    const [length, separator, header] = horizontal ?
        [HORIZ_WIDTH, 0, HEADER.width] : [ITEM_HEIGHT, SEPARATOR_HEIGHT, HEADER.height];
    return {length, offset: (length + separator) * index + header, index};
}




function setContent(content){
    var newsContent = document.getElementById("news_content");
    newsContent.innerHTML = content
    imgsFormat();
    imgWith();
}
function setSource(source){
    var newsSource = document.getElementById("news_source");
    if(source === ""){
        newsSource.innerHTML = "";
    }else{
        newsSource.innerHTML = ""+source;
    }
}
function setPuttime(time){
    var newsTime = document.getElementById("news_puttime");
    newsTime.innerHTML = time;
}
function tapImg(index){
    imgIndex = index;
    callHandler = false;
    var mframe = document.getElementById("mframe");
    mframe.src = CUSTOM_PROTOCOL_SCHEME + '://' + IMG_EVENT;
}

function getImgJSON(){
    return imgsJSON;
}

function getImgIndex(){
    return imgIndex;
}
var fontSize = 17;
function setFontSize(mFontSize){
    if(mFontSize != null)
    {
        fontSize = mFontSize;
    }

    var newsContent = document.getElementById("bodyObj");
    var pArray = document.getElementsByTagName("P");

    for(var i=0; i < pArray.length; i++){
        var pObj = pArray[i];

        pObj.style.fontSize = fontSize + "px";
    }
}

function fontZoomIn(){
    fontSize = 18;
    setFontSize(fontSize);
    return fontSize;
}
function fontZoomOut(){
    fontSize = 13;
    setFontSize(fontSize);
    return fontSize;
}
function fontZoomNormal(){
    fontSize = 17;
    setFontSize(fontSize);
    return fontSize;
}
var imgHoldTag = "[--IMG_TAG--]";
var imgHoldAltTag = "[--IMG_ALT--]";
var imgHoldIndex = "[--IMG_INDEX--]";
var IMG_TAG = "<dl><dt>"+imgHoldTag+"</dt><dd>"+imgHoldAltTag+"</dd></dl>";
var imgsJSON = "[";
var imgIndex = "0";
function imgsFormat(){
    var newsContent = document.getElementById("news_content");
    var html = newsContent.innerHTML;

    imgsJSON = "[";
    var imgArray = new Array();
    var nimgArray = new Array();
    var imgreg = /<[iI][mM][gG][^>]+[^>]*>/g;
    var imgs = document.getElementsByName("jinghua");
    //            alert(imgs.length);
    for(var i=0;i< imgs.length;i++){

        var imgObje = imgs[i];
        imgObje.width = 80;
        var imgAlt = imgObje.alt;
        var imgPath = imgObje.src;
        var imgTag = imgreg.exec(html)[0];

        imgsJSON += "{\"img\":\""+imgPath+"\" , \"description\":\""+imgAlt+"\"},"
        //              alert(imgsJSON);
        var nphoto = IMG_TAG.replace(imgHoldTag,imgTag).replace(imgHoldAltTag,imgAlt).replace(imgHoldIndex,i);

        nimgArray.push(nphoto);
        imgArray.push(imgTag);

    }

    imgsJSON = imgsJSON.substr(0,imgsJSON.length-1);
    imgsJSON += "]";

    for(i = 0; i < imgArray.length; i++){
        html = html.replace(imgArray[i],nimgArray[i]);
    }

    newsContent.innerHTML = html;

}
function imgWith(){
    var imgs = document.getElementsByName("jinghua");
    for(var i=0;i< imgs.length;i++){
        var imgObje = imgs[i];
        imgObje.width = 80;
    }
}