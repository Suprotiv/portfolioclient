import { useEffect } from 'react';

const LazyLoader = () => {
  useEffect(() => {
        const  blurdiv=document.querySelectorAll(".blur-load")
        blurdiv.forEach((div) =>{
            const img= div.querySelector("img")
            function loaded(){
                div.classList.add("loaded")
            }
            if (img.complete){
                loaded()
            }
            else{
                img.addEventListener("load",loaded)
            }
        })
  }, []);
};

export default LazyLoader;
