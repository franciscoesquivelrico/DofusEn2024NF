var abierto = false;

function sidebar(){
    let sidebar = document.getElementById("sidebar");
    let icon = document.getElementById("divLeftArrowSidebar");


    if(!abierto){
        abrirSidebar(sidebar, icon, abierto);
        abierto = true;
    }else{
        cerrarSidebar(sidebar,icon,abierto);
        abierto = false;
    }
    
}

function abrirSidebar(sidebar, icon, estado){
    sidebar.style.left= "0px";
    icon.style.transform= "rotate(180deg)";
}

function cerrarSidebar(sidebar, icon, abierto){
    sidebar.style.left= "-210px";
    icon.style.transform= "rotate(360deg)";
}

