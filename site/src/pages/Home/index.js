import React from 'react';
import LabelToScroll from '../../components/LabelToScroll';
import HeaderComponent from '../../components/Header';

function Page() {
    return <div className="page-home">
        <HeaderComponent 
        arrayTexts={["HOME", "ABOUT ME", "PORTFOLIO", "CONTACT"]}
        className="page-home-header"
        classNameTable="page-home-header-table"
        classNameTableNested="page-home-header-table-nested"></HeaderComponent>
        <LabelToScroll text="SCROLL DOWN TO SEE MORE" className="page-home-footer"></LabelToScroll>
    </div>
}

export default Page;