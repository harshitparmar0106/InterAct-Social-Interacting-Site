//sidebar

const  menuItems = document.querySelectorAll('.menu-item');

//messages

const messagesNotification = document.querySelector('#message-notifications') ;

const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//theme

const theme = document.querySelector('#theme');
const customizeTheme = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root'); 

const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// remove active class from previous menu item
const changeActiveItem = ()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

//search chats in message search bar

const searchMessage = ()=>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();

        if(name.indexOf(val)!=-1){
            user.style.display = 'flex';
        }
        else{
            user.style.display=('none')
        }
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click' , ()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id!='notifications'){
            document.querySelector('.notification-popup').style.display='none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})

messageSearch.addEventListener('keyup',searchMessage);

//highlights message cards when message items is clicked
messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    messagesNotification.querySelector('.notification-count').style.display = 'none';

    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },1500);
})


// theme customization and functionality

const openModel=()=>{
    customizeTheme.style.display='grid';
}

const closeModel = (e)=>{
   if(e.target.classList.contains('customize-theme')){
    customizeTheme.style.display='none';
   }
}

theme.addEventListener('click',openModel)
customizeTheme.addEventListener('click',closeModel)
//------------------ font-size------------------

const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
}


fontSizes.forEach(size=>{
    
    size.addEventListener('click',()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left','5.4rem');
            root.style.setProperty('----sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left','-2rem');
            root.style.setProperty('----sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left','-12rem');
            root.style.setProperty('----sticky-top-right','-35rem');
        }
        document.querySelector('html').styles.fontSize = fontSize;
    })


    
})

const removeActiveClass=()=>{
    colorPalette.forEach(colorPicker=>{
        colorPicker.classList.remove('active');
    })
}


colorPalette.forEach(color=>{
    color.addEventListener('click',()=>{

        let primary;
        removeActiveClass(); 
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=152;
        }
        else if(color.classList.contains('color-4')){
            primaryHue=202;
        }
        else if(color.classList.contains('color-5')){
            primaryHue=20;
        }

        root.style.setProperty('--color-primary-hue',primaryHue);
     })
})


let lightColorLightness;
let whiteColorLightness;
let DarkColorLightness;

const changeBg=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);

    root.style.setProperty('--dark-color-lightness',DarkColorLightness);

    
}

Bg1.addEventListener('click',()=>{
   

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();

    window.location.reload();

})
Bg2.addEventListener('click',()=>{
    DarkColorLightness = '95%';
    whiteColorLightness='20%';
    lightColorLightness='15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();

})
Bg3.addEventListener('click',()=>{
    DarkColorLightness = '95%';
    whiteColorLightness='10%';
    lightColorLightness='0%';

    Bg3.classList.add('active');
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBg();

})