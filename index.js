let btn2=document.querySelector('#btn2')
let btn=document.querySelector('#btn')
let tbl=document.querySelector('#table')
let el=document.querySelectorAll('.div')
let pl1=document.querySelector('#pl1')
let pl2=document.querySelector('#pl2')
let pl1_1=document.querySelector('#pl1_1')
let pl2_1=document.querySelector('#pl2_1')
let scr1=document.querySelector('#scr1')
let scr2=document.querySelector('#scr2')
let timer1=document.querySelector('#timer1')
let timer2=document.querySelector('#timer2')
tbl.style.display='none'
let pnt1=document.querySelector('#points1')
let pnt2=document.querySelector('#points2')
// myEl.style.backgroundColor =('#'+(Math.floor(Math.random()*16777215).toString(16)));
                    // console.log('#'+(Math.floor(Math.random()*16777215).toString(16)));
var colors = ['red', 'green','blue', 'orange', 'yellow'];
let count=0
let count1=0
for(i=0;i<el.length;i++){
    let myEl
    myEl=el[i]
    el[i].style.backgroundColor='white' 
    let arr=['white']
 btn.onclick=()=>{
        timer1.style.display='inline-flex'
        timer2.style.display='inline-flex'
        pl1.style.display='block'
        pl2.style.display='block'
        timer1.style.justifyContent='center'
        timer2.style.justifyContent='center'
        timer1.style.alignItems='center'
        timer2.style.alignItems='center'
        count1++
        tbl.style.display='block'
        btn.style.margin='9px auto 5px  '
        btn.style.height='70px'
        btn.style.width='70px'
        btn.style.fontSize='30px'
        btn.style.border='none'
        btn.style.borderRadius='50px'
        btn.innerHTML='| |'
        if(count1%2==0){
            tbl.style.display='none'
            btn.innerHTML='&#9654'
            timer1.style.display='none'
            timer2.style.display='none'
            pl1.style.display='none'
            pl2.style.display='none'
            btn2.style.display='none'
        }
    }
    let tim2
    let tim3
    myEl.onclick=()=>{
        count++
    if(count%2==1){
         tim2=setInterval(() => {
            timer2.innerHTML--
            if(count%2==0||timer2.innerHTML==0||count1%2==0){
                clearInterval(tim2)
            }
        }, 1000);
    }
    if(count%2==0){
         tim3=setInterval(() => {
            timer1.innerHTML--
            if(count%2==1||timer1.innerHTML==0||count1%2==0){
                clearInterval(tim3)
            }
        }, 1000);
    }
    myEl.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    arr.push(
        myEl.style.backgroundColor)
    btn2.onclick=()=>{
        count-=1
        clearInterval(tim2)
        clearInterval(tim3)

        if(count%2==0){
            timer1.innerHTML-=Number(3)
        }else{timer2.innerHTML-=Number(3)}
        arr.pop()
        myEl.style.backgroundColor=arr[arr.length-1];        
        if(arr.length<2){
            btn2.style.display='none'
        }
        
    }
    if(arr.length>1){
        btn2.style.display='block'
    }
    btn2.addEventListener('mouseout',()=>{
        btn2.style.color='rgb(10, 94, 172)'
        btn2.style.backgroundColor='#f1c40f'
        btn2.innerHTML='&#8634; UNDO'
    })
    btn2.addEventListener('mouseenter',()=>{
        if (count%2==0) {
            btn2.innerHTML='&#8634; PLAYER2 -3s'
        }else{btn2.innerHTML='&#8634; PLAYER1 -3s'}
        btn2.style.color='#f1c40f'
        btn2.style.backgroundColor='rgba(148, 9, 190, 0.781)'

    })
    btn2.addEventListener('click',()=>{
        if (count%2==0) {
            btn2.innerHTML='&#8634; PLAYER2 -3s'
        }else{btn2.innerHTML='&#8634; PLAYER1 -3s'}
    })


    btn.addEventListener('click',()=>{
        if(count1%2==1){
            if(arr.length>1){
                btn2.style.display='block'
            }    
        }
    })

            Myfunc()
            function Myfunc(){
                for(i=0;i<el.length;i++){
                    if(el[i].style.backgroundColor==el[i+1].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+2].style.backgroundColor&&el[i].style.backgroundColor==el[i+3].style.backgroundColor&&
                        el[i].style.backgroundColor==el[i+4].style.backgroundColor&&el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+21].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+42].style.backgroundColor&&el[i].style.backgroundColor==el[i+63].style.backgroundColor&&
                        el[i].style.backgroundColor==el[i+84].style.backgroundColor&&el[i].style.backgroundColor!='white'
                        ||el[i].style.backgroundColor==el[i+19].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+38].style.backgroundColor&&el[i].style.backgroundColor==el[i+57].style.backgroundColor&&
                        el[i].style.backgroundColor==el[i+76].style.backgroundColor&&el[i].style.backgroundColor!='white'
                        ||el[i].style.backgroundColor==el[i+20].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+40].style.backgroundColor&&el[i].style.backgroundColor==el[i+60].style.backgroundColor&&
                        el[i].style.backgroundColor==el[i+80].style.backgroundColor&&el[i].style.backgroundColor!='white'){
                            document.body.style.backgroundColor=' rgba(6, 158, 120, 0.76)'
                            btn2.style.display='none'
                            if(count%2==1){                                    
                        alert(`The first player won. You used ${60-timer1.innerHTML} seconds`)
                        tbl.style.display='none'
                        btn.style.display='none'
                        timer1.style.display='none'
                        timer2.style.display='none'
                        pl2.style.display='none'
                        pl1.style.margin='21% 28.8%'
                        pl1.style.padding='1.5% 2%'
                        pl1_1.innerHTML='THE FIRST PLAYER WON'
                        pl1.style.fontSize='26px'
                        pl1_1.style.fontSize='28px'
                        pl1.style.width='40%'
                        pl1_1.style.height='60px'
                        pnt1.style.height='60px'
                        pl1.style.textAlign='center'
                        pnt1.innerHTML=`You used ${60-timer1.innerHTML} seconds. You have ${5*timer1.innerHTML} points`

                      }
                            else{
                            alert(`The second player won. You used ${60-timer2.innerHTML} seconds`)
                            tbl.style.display='none'
                            btn.style.display='none'
                            timer1.style.display='none'
                            timer2.style.display='none'
                            pl1.style.display='none'
                            pl2.style.margin='21% 28.8%'
                            pl2_1.innerHTML='THE SECOND PLAYER WON'
                            pl2.style.padding='1.5% 2%'
                            pl2.style.fontSize='26px'
                            pl2.style.width='40%'
                            pl2_1.style.height='60px'
                            pnt2.style.height='60px'
                            pl2.style.textAlign='center'
                            pl2_1.style.fontSize='28px'
                            pnt2.innerHTML=`You used ${60-timer2.innerHTML} seconds. You have ${5*timer2.innerHTML} points`

                        }
                    }
                    if(
                        el[i].style.backgroundColor==el[i+1].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+2].style.backgroundColor&&el[i].style.backgroundColor==el[i+3].style.backgroundColor&&
                        el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+21].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+42].style.backgroundColor&&el[i].style.backgroundColor==el[i+63].style.backgroundColor&&
                        el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+19].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+38].style.backgroundColor&&el[i].style.backgroundColor==el[i+57].style.backgroundColor&&
                        el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+20].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+40].style.backgroundColor&&el[i].style.backgroundColor==el[i+60].style.backgroundColor&&
                        el[i].style.backgroundColor!='white'){
                            if(count%2==0){scr2.innerHTML=' 4'}
                            else{scr1.innerHTML='4'}
                            break;
                        }
                    else if(
                        el[i].style.backgroundColor==el[i+1].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+2].style.backgroundColor&&el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+21].style.backgroundColor&&el[i].style.backgroundColor==
                        el[i+42].style.backgroundColor&& el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+19].style.backgroundColor&&el[i].style.backgroundColor==el[i+38].style.backgroundColor&&
                        el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+20].style.backgroundColor&&el[i].style.backgroundColor==el[i+40].style.backgroundColor&&
                        el[i].style.backgroundColor!='white'){
                            if(count%2==0){scr2.innerHTML='3'}
                            else{scr1.innerHTML='3'}
                            break
                        }
                    else if(
                        el[i].style.backgroundColor==el[i+1].style.backgroundColor&&el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+21].style.backgroundColor&& el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+19].style.backgroundColor&&el[i].style.backgroundColor!='white'||
                        el[i].style.backgroundColor==el[i+20].style.backgroundColor&&el[i].style.backgroundColor!='white'){
                            if(count%2==0){scr2.innerHTML='2'}
                            else{scr1.innerHTML='2'}
                        }
                }
            }
}
}

