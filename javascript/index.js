function sidebar(){
    let sidebar = document.getElementById("sidebar");
    let icon = document.getElementById("divLeftArrowSidebar");
    var abierto = false;

    if(!abierto){
        abrirSidebar(sidebar, icon, abierto);
    }else{
        cerrarSidebar(sidebar,icon,abierto);
    }
    
}

function abrirSidebar(sidebar, icon, abierto){
    sidebar.style.left= "0px";
    icon.style.transform= "rotate(180deg)";
    abierto = true;
}

function cerrarSidebar(sidebar, icon, abierto){
    sidebar.style.left= "-210px";
    icon.style.transform= "rotate(180deg)";
    abierto = false;
}

