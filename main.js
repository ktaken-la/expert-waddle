function showParagraph1(){
var inputs=[];
for(var i=1; i<=6;i++){
    inputs.push(document.getElementById("para1_input_box_"+i).value);
}
document.getElementById("show_paragraph_1").innerHTML=inputs.join(". ");
}
