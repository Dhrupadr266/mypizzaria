name_array=[];
function  Submit(){
    var n1=document.getElementById("name1").value;
    var n2=document.getElementById("name2").value;
    var n3=document.getElementById("name3").value;
    var n4=document.getElementById("name4").value;
    name_array.push(n1);
    name_array.push(n2);
    name_array.push(n3);
    name_array.push(n4);
    console.log(name_array);
    document.getElementById("display_names").innerHTML = name_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function Sorting(){
    name_array.sort();
    console.log(name_array);
    document.getElementById("display_names").innerHTML = name_array;
}
