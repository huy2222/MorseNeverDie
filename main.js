var tich = document.getElementById('dots');
var te = document.getElementById('ngang');

var show = document.getElementById('hienthi');
var submit = document.getElementById('send');
var meta = document.getElementById('nhaplieu');
var reset=document.getElementById('reset');
var deleteX=document.getElementById('delete')

var resetmeta=document.getElementById('resetmeta');
var resetshow=document.getElementById('resetshow');
var resetprivate=document.getElementById('resetprivate');

var private=document.getElementById('private');
var array=[];
var arrayShow=[];
var number=0;

 metachange.value='TUWFAAN';


function TichFunction() {
   array.push(tich.value);
   var string='';
     for (var i=0; i<array.length; i++) {
         string=string+array[i];    
     } 
    meta.value=string;  
    document.getElementById('lengthmeta').innerHTML = meta.value.length;
}
tich.addEventListener('click',TichFunction);

function TeFunction() {
    array.push(te.value);
    var string='';
     for (var i=0; i<array.length; i++) {
         string=string+array[i];    
     } 
    meta.value=string;     
    document.getElementById('lengthmeta').innerHTML = meta.value.length;

}
te.addEventListener('click',TeFunction);

function ResetMeta() {
    meta.value='';
    array=[];
    document.getElementById('lengthmeta').innerHTML = 0;
}
resetmeta.addEventListener('click',ResetMeta);

function ResetShow() {
    show.value='';
    arrayShow=[];
    document.getElementById('lengthShow').innerHTML = 0;

}
resetshow.addEventListener('click',ResetShow)

function ResetPrivate() {
    private.value='';
}
resetprivate.addEventListener('click',ResetPrivate)

function DeleteFunction() {
    var str1='';
    if (meta.value.length>0) {
        str1=meta.value.slice(0,-1);
        meta.value=str1;
    }
    meta.value=str1;
    // thay đổi mảng sau khi xóa thành str1 và sau đó nhấn thì add kí tự vào thêm
    array=[str1];
    document.getElementById('lengthmeta').innerHTML = meta.value.length;

}
deleteX.addEventListener('click',DeleteFunction)


function ArrayFunction () {
    var result = meta.value;    
    
        if (result=='.' ) { arrayShow.push('E')} else 
        if (result=='..' ) { arrayShow.push('I')} else 
        if (result=='...' ) { arrayShow.push('S')} else 
        if (result=='....' ) { arrayShow.push('H')} else 
        if (result=='-' ) { arrayShow.push('T')} else 
        if (result=='--' ) { arrayShow.push('M')} else 
        if (result=='---' ) { arrayShow.push('O')} else 
        if (result=='----' ) { arrayShow.push('CH')} else 
        if (result=='.-' ) { arrayShow.push('A')} else 
        if (result=='-.' ) { arrayShow.push('N')} else 
        if (result=='..-' ) { arrayShow.push('U')} else 
        if (result=='-..' ) { arrayShow.push('D')} else 
        if (result=='...-' ) { arrayShow.push('V')} else 
        if (result=='-...' ) { arrayShow.push('B')} else 
        if (result=='.-.' ) { arrayShow.push('R')} else 
        if (result=='.--.' ) { arrayShow.push('P')} else 
        if (result=='-.-' ) { arrayShow.push('K')} else 
        if (result=='.--' ) { arrayShow.push('W')} else 
        if (result=='-..-' ) { arrayShow.push('X')} else 
        if (result=='--.' ) { arrayShow.push('G')} else 
        if (result=='.-..' ) { arrayShow.push('L')} else 
        if (result=='..-.' ) { arrayShow.push('F')} else 
        if (result=='-.--' ) { arrayShow.push('Y')} else 
        if (result=='--.-' ) { arrayShow.push('Q')} else 
        if (result=='-.-.' ) { arrayShow.push('C')} else 
        if (result=='.---' ) { arrayShow.push('J')} else 
        if (result=='--..' ) { arrayShow.push('Z')} else
        if (result=='.----' ) { arrayShow.push('1')} else 		
        if (result=='..---' ) { arrayShow.push('2')} else 	
        if (result=='...--' ) { arrayShow.push('3')} else 		
        if (result=='....-' ) { arrayShow.push('4')} else 		
        if (result=='.....' ) { arrayShow.push('5')} else 		
        if (result=='-....' ) { arrayShow.push('6')} else 		
        if (result=='--...' ) { arrayShow.push('7')} else 		
        if (result=='---..' ) { arrayShow.push('8')} else 		
        if (result=='----.' ) { arrayShow.push('9')} else 		
        if (result=='-----' ) { arrayShow.push('0')} else 	
        { 
            arrayShow.push('?');
        } 
   var string1='';
   for (var i=0; i<arrayShow.length; i++) {
       string1=string1+arrayShow[i];    
   } 
  show.value=string1; 
  array=[];
  document.getElementById('lengthShow').innerHTML = arrayShow.length;
}  
submit.addEventListener('click',ArrayFunction);
function showFunction() {
     var result = meta.value;    
        if (result=='.' ) { private.value='E'} else 
        if (result=='..' ) { private.value='I'} else 
        if (result=='...' ) { private.value='S'} else 
        if (result=='....' ) { private.value='H'} else 
        if (result=='-' ) { private.value='T'} else 
        if (result=='--' ) { private.value='M'} else 
        if (result=='---' ) { private.value='O'} else 
        if (result=='----' ) { private.value='CH'} else 
        if (result=='.-' ) { private.value='A'} else 
        if (result=='-.' ) { private.value='N'} else 
        if (result=='..-' ) { private.value='U'} else 
        if (result=='-..' ) { private.value='D'} else 
        if (result=='...-' ) { private.value='V'} else 
        if (result=='-...' ) { private.value='B'} else 
        if (result=='.-.' ) { private.value='R'} else 
        if (result=='.--.' ) { private.value='P'} else 
        if (result=='-.-' ) { private.value='K'} else 
        if (result=='.--' ) { private.value='W'} else 
        if (result=='-..-' ) { private.value='X'} else 
        if (result=='--.' ) { private.value='G'} else 
        if (result=='.-..' ) { private.value='L'} else 
        if (result=='..-.' ) { private.value='F'} else 
        if (result=='-.--' ) { private.value='Y'} else 
        if (result=='--.-' ) { private.value='Q'} else 
        if (result=='-.-.' ) { private.value='C'} else 
        if (result=='.---' ) { private.value='J'} else 
        if (result=='--..' ) { private.value='Z'} else 
        if (result=='.----' ) { private.value='1'} else 		
        if (result=='..---' ) { private.value='2'} else 	
        if (result=='...--' ) { private.value='3'} else 		
        if (result=='....-' ) { private.value='4'} else 		
        if (result=='.....' ) { private.value='5'} else 		
        if (result=='-....' ) { private.value='6'} else 		
        if (result=='--...' ) { private.value='7'} else 		
        if (result=='---..' ) { private.value='8'} else 		
        if (result=='----.' ) { private.value='9'} else 		
        if (result=='-----' ) { private.value='0'} else { 
            private.value='??';
        } 
      
        array=[];
        meta.value='';     
}
submit.addEventListener('click',showFunction);

function ResetFunction() {
    show.value='';
    meta.value='';
    arrayShow=[];
    array=[];
    private.value='';
    document.getElementById('lengthShow').innerHTML = 0;
    document.getElementById('lengthmeta').innerHTML = 0;
}
reset.addEventListener('click',ResetFunction)
var MyTimeour = setTimeout(MyInfor,3000);
function MyInfor() {  
    private.value="Nhật Huy đến từ GĐPT Từ ÂN";
}
// var ContentMorse = document.getElementById('Id-content');
// var Password = document.getElementById('password');
// var btnPassword = document.getElementById('submit-password');
// var ContentLayout = document.getElementById('JS-layout');

// function GetvaluePassword() {
//     var passwordValue= Password.value;
//     if (passwordValue=='gdpttuan') {
//         ContentMorse.style.display='block';
//         ContentLayout.style.display='none';
//         var MyTimeour = setTimeout(MyInfor,3000);
//         function MyInfor() {  
//         private.value="Nhật Huy đến từ GĐPT Từ ÂN";
// }
//     } else {
//         alert('bạn nhập sai mật khẩu');
//     }

// }
// btnPassword.addEventListener('click',GetvaluePassword);


// meta change
var MetaChangeInput = document.getElementById('metachange');
var btnChange=document.getElementById('btn-change');
var RestMorseChange = document.getElementById('resetmorsechange');
var ReseAllChange = document.getElementById('reset-change');
function ChangeMorse() {
    metachange.value=metachange.value.toUpperCase();
    metachange.value=metachange.value.split(" ").join("");
    let pattern=/[a-z0-9]/gi;
    let resultPattern = metachange.value.match(pattern).join('');
    if (metachange.value==resultPattern) {
        for (var i=0; i<metachange.value.length; i++) {
        if (metachange.value[i]=='E') { array.push('.'); } else
        if (metachange.value[i]=='I') { array.push('..'); } else
        if (metachange.value[i]=='S') { array.push('...'); } else
        if (metachange.value[i]=='H') { array.push('....'); } else
        if (metachange.value[i]=='T') { array.push('-'); } else
        if (metachange.value[i]=='M') { array.push('--'); } else
        if (metachange.value[i]=='O') { array.push('---'); } else
        if (metachange.value[i]=='CH') { array.push('----'); } else
        if (metachange.value[i]=='A') { array.push('.-'); } else
        if (metachange.value[i]=='N') { array.push('-.'); } else
        if (metachange.value[i]=='U') { array.push('..-'); } else
        if (metachange.value[i]=='D') { array.push('-..'); } else
        if (metachange.value[i]=='V') { array.push('...-'); } else
        if (metachange.value[i]=='B') { array.push('-...'); } else
        if (metachange.value[i]=='R') { array.push('.-.'); } else
        if (metachange.value[i]=='P') { array.push('.--.'); } else
        if (metachange.value[i]=='K') { array.push('-.-'); } else
        if (metachange.value[i]=='W') { array.push('.--'); } else
        if (metachange.value[i]=='X') { array.push('-..-'); } else
        if (metachange.value[i]=='G') { array.push('--.'); } else
        if (metachange.value[i]=='L') { array.push('.-..'); } else
        if (metachange.value[i]=='F') { array.push('..-.'); } else
        if (metachange.value[i]=='Y') { array.push('-.--'); } else
        if (metachange.value[i]=='Q') { array.push('--.-'); } else
        if (metachange.value[i]=='C') { array.push('-.-.'); } else
        if (metachange.value[i]=='J') { array.push('.---'); } else
        if (metachange.value[i]=='Z') { array.push('--..'); } else
        if (metachange.value[i]=='1') { array.push('.----'); } else
        if (metachange.value[i]=='2') { array.push('..---'); } else
        if (metachange.value[i]=='3') { array.push('…--'); } else
        if (metachange.value[i]=='4') { array.push('….-'); } else
        if (metachange.value[i]=='5') { array.push('…..'); } else
        if (metachange.value[i]=='6') { array.push('-….'); } else
        if (metachange.value[i]=='7') { array.push('--…'); } else
        if (metachange.value[i]=='8') { array.push('---..'); } else
        if (metachange.value[i]=='9') { array.push('----.'); } else
        if (metachange.value[i]=='0') { array.push('-----'); } else {array.push('????'); }     
    }
   
    for (var i=0; i<metachange.value.length; i++) {
        var htmlAnpha =`<div class="child-anpha" id="${i}"></div>`;     
        document.getElementById('result-anpha').insertAdjacentHTML('beforeend',htmlAnpha)
        document.getElementById(i).innerHTML=`${metachange.value[i]}`; 
        number=number+1;    
    }
    for (var j=metachange.value.length; j<metachange.value.length*2; j++) {
        var htmlMorse =`<div class="child-morse" id="${j}"></div>`;
        document.getElementById('result-morse').insertAdjacentHTML('beforeend',htmlMorse);         
    }    
    for (var k=0; k<array.length; k++) {     
        document.getElementById(k+metachange.value.length).innerHTML=array[k];
    }
    array=[]
    } else {
    alert('vui lòng nhập tiếng việt không dấu')
}
}
btnChange.addEventListener('click',ChangeMorse)
// number: số khối div tạo ra
// document.getElementById("btn-change").disabled = true; //khóa nút bấm

function LengthMetaChange() {
    document.getElementById('lengthmetachange').innerHTML = metachange.value.length;
}
metachange.addEventListener('keyup',LengthMetaChange)

function LengthMeta() {
    // document.getElementById('lengthmeta').innerHTML = meta.value.length;
    document.getElementById('lengthShow').innerHTML = arrayShow.length;
}
meta.addEventListener('keyup',LengthMeta)

function LengthShow() {
}
show.addEventListener('change',LengthShow)



function MetaChange() {
    for (var h=0; h<number; h++) {
        var resultAnpha = document.querySelector('.child-anpha');
        resultAnpha.parentNode.removeChild(resultAnpha);
    }
    for (var l=0; l<number; l++) {
        var resultMorse = document.querySelector('.child-morse');
        resultMorse.parentNode.removeChild(resultMorse);
    }
    number=0;
    for( var x=1; x<2; x++) { 
        var PermanentClass = document.querySelector('.permanent');
        PermanentClass.parentNode.removeChild(PermanentClass);
    }

    
    // document.getElementById("btn-change").disabled = false; // mở nút bấm
   
}

MetaChangeInput.addEventListener('change',MetaChange)

function ResetChangeInput() {
    metachange.value='';
    array=[];
    document.getElementById('lengthmetachange').innerHTML = 0;

}
RestMorseChange.addEventListener('click',ResetChangeInput)

function ReseAllChangeFn() {
    document.getElementById('lengthmetachange').innerHTML = 0;
    metachange.value='';
    array=[];
    for (var h=0; h<number; h++) {
        var resultAnpha = document.querySelector('.child-anpha');
        resultAnpha.parentNode.removeChild(resultAnpha);
    }
    for (var l=0; l<number; l++) {
        var resultMorse = document.querySelector('.child-morse');
        resultMorse.parentNode.removeChild(resultMorse);
    }
    number=0;
    for( var x=1; x<2; x++) { 
        var PermanentClass = document.querySelector('.permanent');
        PermanentClass.parentNode.removeChild(PermanentClass);
    }
}
ReseAllChange.addEventListener('click',ReseAllChangeFn)