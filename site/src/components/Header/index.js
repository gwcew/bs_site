import React from 'react';

function Component({arrayTexts, className, classNameTable, classNameTableNested}) {
    const generatedLists = arrayTexts.map((item) => (
        <td key={item}>{item}</td>
    ));

    return (
    <header className={className}>
        <table className={classNameTable} width="90%">
            <tbody>
                <tr>
                    <td>
                        <table className={classNameTableNested} cellPadding="25">
                            <tbody>
                                <tr>
                                    {generatedLists}
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </header>
);
}

export default Component;

