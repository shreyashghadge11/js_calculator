function getHeader(){
    return document.getElementById("header").innerText;
}
function getTotal(){
    return document.getElementById("total").innerText;
}
function evaluateit(){
    var no1=getHeader();
    var no2=getTotal();
    var a=no1.charAt(no1.length);
    var no11=reverseNumber(no1.substring(0,no1.length-1));
    var no22=reverseNumber(no2);
    if(a== '/'){return no11/no22;}
    if(a=='x'){return no11*no22;}
    if(a=='-'){return no11-no22;}
    if(a=='+'){return no11+no22;}

}
function updateHeader(num){
    document.getElementById("header").innerText=num;
}
function updateTotal(total){
    if (total==""){
        document.getElementById("total").innerText=total;
    }
    else{
    document.getElementById("total").innerText=getFormattedNumber(total);
    }
}
function getFormattedNumber(num){
    var n=Number(num);
    var value= n.toLocaleString("en");
    return value;
}
function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}


var operator = document.getElementsByClassName("op");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=='allcl'){
            document.getElementById("total").textContent="";
            document.getElementById("header").textContent="";
        }
        if(this.id=='cl'){
            if(document.getElementById('total').textContent.length!='')
            {//
                var str=getTotal();
                var num=reverseNumber(str);
                var str = num.toString(10);
                var str = getFormattedNumber(str);
                document.getElementById('total').textContent=str.substring(0,str.length-1);
            }
            else{
                if(getHeader().charAt(getHeader().length-1)=='/'||getHeader().charAt(getHeader().length-1)=='x'||getHeader().charAt(getHeader().length-1)=='-'||getHeader().charAt(getHeader().length-1)=='+'){
                    var str=getHeader();
                    document.getElementById('total').textContent=str.substring(0,str.length-1);
                    document.getElementById('header').textContent='';
                }
                else{
                    var str=getHeader();
                    document.getElementById('header').textContent=str.substring(0,str.length-1);
                }
            }
        }
        if(this.id=='div'||this.id=='mul'||this.id=='sub'||this.id=='add'){
            document.getElementById('header').textContent=document.getElementById('total').textContent+document.getElementById(this.id).textContent;
            document.getElementById('total').textContent="";
            
        }
        if(this.id=='answer'){
            //document.getElementById('total').textContent=evaluateit();
            //document.getElementById('header').textContent=document.getElementById('header').textContent+document.getElementById('total').textContent;
           var str=getHeader();
           var str2=getTotal();
           document.getElementById('header').textContent= str+str2;
           //var numu=evaluateit();
           var a=str.charAt(str.length-1);
           var no1=reverseNumber(str.substring(0,str.length-1));
           var no2=reverseNumber(str2);
           var no0=0;
           if(a== '/'){var no0=(no1/no2);}
            if(a=='x'){var no0= (no1*no2);}
            if(a=='-'){var no0=(no1-no2);}
            if(a=='+'){var no0=(no1+no2);}

                
           document.getElementById('total').textContent=no0.toString(10);
        }
    })
}
var number= document.getElementsByClassName("no");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output = reverseNumber(getTotal());
        if(output!=NaN){
            output=output+this.id;
            
            updateTotal(output);
        }
    })
}