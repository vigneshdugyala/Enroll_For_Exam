
var uname
var pwd
var cpwd
function validater(){
    uname=document.register.uname.value
    pwd=document.register.pwd.value
    cpwd=document.register.cpwd.value
    if (pwd===cpwd){
        document.querySelector('.register').style.display="none"
        document.querySelector('.login').style.display="block"
        document.querySelector('.logo').innerHTML='<span>L</span>ogin'
        sessionStorage.setItem('name',uname)
    }
    else{
        alert('Password did not match!')
    }
}
var start
function validatel(){
    if ((document.logi.un.value)===uname){
        if((document.logi.pw.value)===cpwd){
            sessionStorage.setItem('name','Welcome '+uname)
            start=1
            sessionStorage.setItem('no',start)
            return true 
        }
        else{
            alert('Invalid Credentials')
            return false
        }
    }
    else{
        alert('Invalid Credentials')
        return false
    }
}
if ((sessionStorage.no)==='1'){
    document.querySelector('.nam').remove()
    document.querySelector('.namm').remove()
    var ss=document.createElement('li')
    var tt=document.createTextNode('Logout')
    ss.appendChild(tt)
    ss.setAttribute('class','log')
    var li=document.createElement('li')
    li.setAttribute('class','profile')
    var t=document.createTextNode(sessionStorage.name)
    console.log(t);
    li.appendChild(t)
    document.querySelector('.ul').appendChild(li)
    document.querySelector('.ul').appendChild(ss)
    document.querySelector('.hall').style.display='flex'
    document.querySelector('.halt').style.display='flex'
    document.querySelector('.log').addEventListener('click',()=>{
        sessionStorage.clear()
        window.location.reload()
    })
}


document.querySelector('.next').addEventListener('click',()=>{
    document.querySelector('.register').style.display="none"
    document.querySelector('.login').style.display="block"
    document.querySelector('.logo').innerHTML='<span>L</span>ogin'
    
})



