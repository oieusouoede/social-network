import React from "react";

function Header(){
    return (
        <header className="header">
            <div>
                <span>Logo</span>
            </div>
            <div>
                <a className="header-links" href="#00">Início</a>
                <a className="header-links" href="#00">Perfil</a>
                <a className="header-links" href="#00">Recados</a>
                <a className="header-links" href="#00">Amigos</a>
                <a className="header-links" href="#00">Comunidades</a>
            </div>
            <a className="header-links" href="#00">Sair</a>
        </header>
    );
}

export default Header;