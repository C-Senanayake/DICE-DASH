

var flag;//Decide which player should roll
var val1,val2; //to save the numbers of the dices
var img1=document.createElement('img');
var img2=document.createElement('img');
var x,y;// to save the names of the players
document.getElementById("container2").style.display="none";
document.getElementById("container3").style.display="none";

// if(x==null){
// }
// else{
//         document.getElementById("container2").style.display="true";
// }
function disable(x){
        if(x==0){
                document.getElementById("roll1").disabled=true;
                document.getElementById("roll2").disabled=false;
                flag=1;
        }
        else{
                document.getElementById("roll2").disabled=true;
                document.getElementById("roll1").disabled=false;
                flag=0;
        }
}

function roll1(){
        disable(flag);
        val1=Math.floor((Math.random()*6)+1);
        val2=Math.floor((Math.random()*6)+1);
        sf1.score1.value = eval(sf1.score1.value+"+"+val1+"+"+val2);
        display(val1,val2);
        if(val1==val2 && val1!=1 && val2!=1){
                alert("Auto Rolling the dice again by "+x);
                roll1();
                disable(flag);
        }
        else if(val1==val2 && val1==1){
                alert("Both values equal to one,"+x+"'s score=0");
                sf1.score1.value =0;
        }
        if(sf1.score1.value>=100 ){
                document.getElementById("container2").style.display="none";
                document.getElementById("container3").style.display="inherit";
                document.getElementById("winner").innerHTML=x;
        }
}
function roll2(){
        disable(flag);
        val1=Math.floor((Math.random()*6)+1);
        val2=Math.floor((Math.random()*6)+1);
        sf2.score2.value = eval(sf2.score2.value+"+"+val1+"+"+val2);
        display(val1,val2);
        if(val1==val2 && val1!=1 && val2!=1){   
                alert("Auto Rolling the dice again by "+y);          
                roll2();
                disable(flag);
        }
        else if(val1==val2 && val1==1){
                alert("Both values equal to one,"+y+"'s score=0");
                sf2.score2.value =0;
        }
        if(sf2.score2.value>=100 ){
                document.getElementById("container2").style.display="none";
                document.getElementById("container3").style.display="inherit";
                document.getElementById("winner").innerHTML=y;
        }
}

function display(var1,var2){
    switch(var1){
        case 1:img1.src="img/dice_1.png";
                var block=document.getElementById("dice1").appendChild(img1);
                break;
        case 2:img1.src="img/dice_2.png";
                var block=document.getElementById("dice1").appendChild(img1);
                break;
        case 3:img1.src="img/dice_3.png";
                var block=document.getElementById("dice1").appendChild(img1);
                break;
        case 4:img1.src="img/dice_4.png";
                var block=document.getElementById("dice1").appendChild(img1);
                break;
        case 5:img1.src="img/dice_5.png";
                var block=document.getElementById("dice1").appendChild(img1);
                break;
        case 6:img1.src="img/dice_6.png";
                var block=document.getElementById("dice1").appendChild(img1);
                break;        
    }
    switch(var2){
        case 1:img2.src="img/dice_1.png";
                var block=document.getElementById("dice2").appendChild(img2);
                break;
        case 2:img2.src="img/dice_2.png";
                var block=document.getElementById("dice2").appendChild(img2);
                break;
        case 3:img2.src="img/dice_3.png";
                var block=document.getElementById("dice2").appendChild(img2);
                break;
        case 4:img2.src="img/dice_4.png";
                var block=document.getElementById("dice2").appendChild(img2);
                break;
        case 5:img2.src="img/dice_5.png";
                var block=document.getElementById("dice2").appendChild(img2);
                break;
        case 6:img2.src="img/dice_6.png";
                var block=document.getElementById("dice2").appendChild(img2);
                break;        
    }
    document.getElementById("total").innerHTML="Total = "+var1+" + "+var2+" = "+(var1+var2);
}

function play(){
        document.getElementById("container1").style.display="none";
        document.getElementById("container2").style.display="inherit";
        x=document.getElementById("player1").value;
        y=document.getElementById("player2").value;
        document.getElementById("name1").innerHTML=x;
        document.getElementById("name2").innerHTML=y;
        // document.getElementById("roll1").disabled=true;
        flag=Math.floor((Math.random()*2))-1;
        disable(flag);
        
        
}