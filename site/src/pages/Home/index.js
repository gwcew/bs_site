import React from 'react';
import LabelToScroll from '../../components/LabelToScroll';


function Page() {
    return <div className="page-home">
        <header className="page-home-header">
            <table className="page-home-header-table" width="90%">
                <tr>
                    <td>
                        <table className="page-home-header-table-nested" cellPadding="25">
                            <tr>
                                <td>HOME</td>
                                <td>ABOUT ME</td>
                                <td>PORTFOLIO</td>
                                <td>CONTACT</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </header>
        <LabelToScroll text="SCROLL DOWN TO SEE MORE" className="page-home-footer"></LabelToScroll>
    </div>
}

export default Page;