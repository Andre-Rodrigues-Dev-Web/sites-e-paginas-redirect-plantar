import { useEffect } from 'react';
import Topo from '../Components/Topo';
import Plantar from './Plantar';
import Footer from '../Components/Footer';

const Layout = () => {
    const getCurrentDomain = () => {
        return window.location.hostname;
    };

    const showContentBasedOnDomain = () => {
        const currentDomain = getCurrentDomain();
        const plantarDiv = document.querySelector(".content-plantar");
        const carbonoSustentavelDiv = document.querySelector(".content-carbono-sustentavel");
        const carbonoReduzidoDiv = document.querySelector(".content-carbono-reduzido");
        const localhostDiv = document.querySelector(".content-localhost");

        if (currentDomain === "https://www.projetoplantar.com.br") {
            plantarDiv.style.display = "block";
            carbonoSustentavelDiv.style.display = "none";
            carbonoReduzidoDiv.style.display = "none";
        } else if (currentDomain === "https://carbonosustentavel.com.br") {
            plantarDiv.style.display = "none";
            carbonoSustentavelDiv.style.display = "block";
            carbonoReduzidoDiv.style.display = "none";
        } else if (currentDomain === "https://carbonoreduzido.com.br") {
            plantarDiv.style.display = "none";
            carbonoSustentavelDiv.style.display = "none";
            carbonoReduzidoDiv.style.display = "block";
        }
        else if (currentDomain === "localhost" || currentDomain === "http://localhost:3000") {
            plantarDiv.style.display = "none";
            carbonoSustentavelDiv.style.display = "none";
            carbonoReduzidoDiv.style.display = "none";
            localhostDiv.style.display = "block";
        }
        else {
            plantarDiv.style.display = "none";
            carbonoSustentavelDiv.style.display = "none";
            carbonoReduzidoDiv.style.display = "none";
        }
    };

    useEffect(() => {
        showContentBasedOnDomain();
    }, []);

    return (
        <>
            <div className="content-plantar">
                
            </div> 
            <div className="content-carbono-sustentavel">
                
            </div>   
            <div className="content-carbono-reduzido">
                
            </div> 
            <div className="content-localhost">
                <Topo />
                <Plantar />
                <Footer />
            </div>
        </>
    );
}

export default Layout;
