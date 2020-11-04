// Traditional js part
// to check if the input value contains a number at the start
// function checnum(inputValue){
//     var input=inputValue.value;
//     if(!isNaN(input)){
//         input = input.substring(0,(input.length-1));
//         inputValue.value=input;
//         console.log(input);
//     }
// }

// Es6 notation

var checnum = (inputValue) =>{
    let input=inputValue.value;
    if(!isNaN(input)){
        input = input.substring(0,(input.length-1));
        inputValue.value=input;
        console.log(input);
    }
}

var calc = ()=>{

var fname = document.getElementById('yname').value;
var sname = document.getElementById('pname').value;
console.log(fname);
console.log(sname);

if(fname==''){
    alert("Enter your Name");
}
else if(sname == ''){
    alert("Enter Partner Name");
}
// regex
var r=/\s+/g;

var orfirst=fname.toUpperCase();
console.log(orfirst);
var nam=orfirst;
orfirst = orfirst.replace(r,"");

if(orfirst!=""){
    console.log(orfirst);
    var count=0;
    var first = orfirst;
    second = sname.toUpperCase();
    var names=second;
    second=second.replace(r,"");
    if(second!=""){
        // logic to remove the matching characters
        document.getElementById("tablid").style.display = "Block";
        for(var i=0;i<first.length;i++)
        {
            for(var j=0;j<second.length;j++)
            {
                if(first[i]==second[j])
                {
                    var a1= first.substring(0,i);
                    var a2 = first.substring(i+1,first.length);
                    first = a1+a2;
                    i=-1;
                    var b1= first.substring(0,j);
                    var b2 = first.substring(j+1,second.length);
                    first = b1+b2;
                    j=-1;
                    break;
                }
            }
        }
    }

    var ss = (first+second);
    var l = ss.length;
    var arr = new Array("F","L","A","M","E","S");
var stp = 1;
    for(var x=6;x>1;x--){
        var g=((l%x)+stp)-1;
        if(g>x){
            g=g%x;
        }
        if(g==0){
            g=arr.length
        }
        arr.splice(g-1,1);
        stp=g;
    }
    if(arr=="F"){
    document.getElementById("msg").innerHTML = "FRIENDS";
    document.getElementById("msg").style.color = "blue";
    }
    else if(arr=="L"){
    document.getElementById("msg").innerHTML = "LOVER";
    document.getElementById("msg").style.color = "#FF0080";
    }
    else if(arr=="A"){
    document.getElementById("msg").innerHTML = "AFFECTION";
    document.getElementById("msg").style.color = "#DBA901";
    }
    else if(arr=="M"){
    document.getElementById("msg").innerHTML = "MARRIAGE";
    document.getElementById("msg").style.color = "green";
    }
    else if(arr=="E"){
    document.getElementById("msg").innerHTML = "ENEMY";
    document.getElementById("msg").style.color = "red";
    }
    else if(arr=="S"){
    document.getElementById("msg").innerHTML = "SISTER";
    document.getElementById("msg").style.color = "violet";
    }
document.getElementById("nam"+1).style.display = "block";
document.getElementById("nam"+1).textContent = nam + "&" + names;

}
else{

}
}
