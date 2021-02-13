import React from 'react';

function Component({arrayTexts, className, classNameTable, classNameTableNested}) {
    const generatedLists = arrayTexts.map((item) => (
        <td>{item}</td>
    ));

    return (
    <header className={className}>
        <table className={classNameTable} width="90%">
            <tr>
                <td>
                    <table className={classNameTableNested} cellPadding="25">
                        <tr>
                            {generatedLists}
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </header>
);
}

export default Component;

