import React from 'react'

export default function About(props) {
    let accordionBtnStyle = {
        backgroundColor: props.mode === 'dark'?'#212529':'white',
        color: props.mode === 'dark'?'white':'black',
    };

    let accordionCollapseStyle = {
        backgroundColor: props.mode === 'dark'?'#444444':'white',
        color: props.mode === 'dark'?'white':'black',
    };
    return (
        <>
        <h1 style={{color:props.mode === 'dark'?'white':'dark'}}>About</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={accordionBtnStyle}>
                    <strong>What is textUtils?</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={accordionCollapseStyle}>
                    <p>Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes (only if you enable grammarly extension in your browser). To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. Tip: Bookmark this page now.</p>
                    <p>Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.</p>
                    <p>In the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you're using.</p>
                    <p>Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so. <strong>Also please do enable grammarly extension in your Browser to automatically detect spelling mistakes. <a href="https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en" rel="noopener noreferrer" target={'_blank'}>click here to add Grammarly</a>.</strong></p>
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={accordionBtnStyle}>
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={accordionCollapseStyle}>
                    <p>TextUtils is a free open source software developed by <strong>Vinay Araveti</strong>.</p>
                </div>
                </div>
            </div>
            <div className="accordion-item" >
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={accordionBtnStyle}>
                    <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={accordionCollapseStyle}>
                    <ul className="nav justify-content-center list-unstyled d-flex flex-column">
                        <li className="ms-3"><i className="fab fa-chrome fa-lg my-3"> Google Chrome</i></li>
                        <li className="ms-3"><i className="fab fa-firefox-browser fa-lg my-3"> Mozilla Firefox</i></li>
                        <li className="ms-3"><i className="fab fa-edge-legacy fa-lg my-3"> Microsoft Edge</i></li>
                        <li className="ms-3"><i className="fab fa-safari fa-lg my-3"> Safari</i></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
