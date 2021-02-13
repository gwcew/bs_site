import React from 'react';
import HeaderComponent from '../../components/Header';
import LabelToScrollComponent from '../../components/LabelToScroll';
import PostComponent from '../../components/Post';

function Page() {
    return <div className="page-aboutme">
        <HeaderComponent 
        arrayTexts={["HOME", "ABOUT ME", "PORTFOLIO", "CONTACT"]}
        className="page-aboutme-header"
        classNameTable="page-aboutme-header-table"
        classNameTableNested="page-aboutme-header-table-nested"></HeaderComponent>
        <PostComponent
        headerTextName="ABOUT ME"
        authorTextName="Jason Wood"
        className="page-aboutme-content"
        classImageName="page-aboutme-content-image"
        classContentName="page-aboutme-content-post"
        classContentHeaderName="page-aboutme-content-post-header"
        classContentFooterName="page-aboutme-content-post-footer"
        classContentBodyName="page-aboutme-content-post-body"></PostComponent>
        <LabelToScrollComponent 
        text="KEEP SCROLLING, THERE IS STILL MORE TO COME"
        className="page-aboutme-footer"></LabelToScrollComponent>
    </div>
}

export default Page;