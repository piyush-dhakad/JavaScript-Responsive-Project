let navTabs = document.querySelectorAll(".nav-tabs>.nav-tab");
let sideNavTabs = document.querySelectorAll(".side-nav-tabs>.side-nav-tab");
let sideNavBar = document.getElementById("sideNavBar");
let backdrop = document.getElementById("backdrop");
let signupDialog = document.getElementById("signupDialog");

let sideNavBarWidth = "240px";
let isSideNavBarVisible = true;//toggleSideNavBar() will make it false first
toggleSideNavBar();

(function registerEventListerners(){
    navTabs.forEach(el=> el.addEventListener('click',onClickNavTab));
    sideNavTabs.forEach(el=> el.addEventListener('click',onClickSideNavTab));
    document.getElementById('sideNavToggleButton').addEventListener('click',toggleSideNavBar);
})()

function onClickNavTab(event){
    navTabs.forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
}

function onClickSideNavTab(event){
    sideNavTabs.forEach(el=>el.classList.remove('active'));
    event.target.classList.add('active');
}

function toggleSideNavBar(){    
    isSideNavBarVisible = !isSideNavBarVisible;
    if(!isSideNavBarVisible){
        sideNavBar.style.marginLeft = "-"+sideNavBarWidth
        backdrop.classList.add('display-none')
    }else{
        sideNavBar.style.marginLeft = '0px'
        backdrop.classList.remove('display-none')
    }
}

function openSignupDialog(){
    backdrop.classList.remove('display-none')
    signupDialog.style.display = "flex"
}

function closeSignupDialog(){
    backdrop.classList.add('display-none')
    signupDialog.style.display = "none"
}