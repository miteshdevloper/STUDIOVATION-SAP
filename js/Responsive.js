const menue = document.getElementById('Menue');
let flag = 0;
const list = document.getElementById('Nav-list');
const Logo = document.getElementById('LogoHolder');
const LogoMain = document.querySelector('.logo h3');

document.addEventListener('click',function(){
    if(flag==0){
        list.style.display = 'Flex';
        menue.style.width = '100%'
        Logo.style.width = '10vw';
        LogoMain.style.display = 'none';
        flag = 1;
    }
    else{
        list.style.display = 'none';
        Logo.style.width = '100vw';
        menue.style.width = 'unset'
        LogoMain.style.display = 'block';
        flag = 0;
    }
})