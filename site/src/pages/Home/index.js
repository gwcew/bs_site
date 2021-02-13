import React, {useLayoutEffect, useState} from 'react';
import LabelToScroll from '../../components/LabelToScroll';
import HeaderComponent from '../../components/Header';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([document.documentElement.clientWidth, 0]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function Page() {
    const [width, height] = useWindowSize();

    return <div className="page-home">

        <HeaderComponent 
        arrayTexts={width < 602 ? ["∞ MENU"] : ["HOME", "ABOUT ME", "PORTFOLIO", "CONTACT"]}
        className="page-home-header"
        classNameTable="page-home-header-table"
        classNameTableNested="page-home-header-table-nested"></HeaderComponent>

        {width < 602 ? null : <LabelToScroll text="SCROLL DOWN TO SEE MORE" className="page-home-footer"></LabelToScroll>}
    </div>
}

export default Page;