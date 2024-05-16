// rfc
import React, { useState } from 'react';
export default function About() {
    const getStyles = (color, backgroundColor) => { return { color, backgroundColor } };


    const [styles, setStyle] = useState(getStyles('black', 'white'))

    // const [isStyle, setIsStyle] = useState(false);

    const modeSwitch = () => {
        // setIsStyle(!isStyle)
        if (styles.color === 'black') {
            setStyle(getStyles('white', 'black'))


        } else {
            setStyle(getStyles('black', 'white'));

        }
    };
    // const [styles, setStyle] = useState({'color':'black'})

    // useEffect(() => {=
    //     setStyle({'color':isStyle?'red':'black'})
    //     console.log(isStyle)
    // }, [isStyle])


    return (

        <div className='Container mx-5' style={styles} >
            <h2 className="text-body-emphasis">Why Text Transformer?</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={styles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>

                                User-Friendly Interface
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={styles}>
                            With a clean and intuitive design, transforming your text is as easy as typing and clicking a button.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={styles}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={styles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>
                                Customization
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={styles}>
                        <div className="accordion-body">
                            Tailor your text to fit your needs by selecting between uppercase and lowercase conversion options.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={styles} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>

                                No Installation Required
                            </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={styles}>
                        <div className="accordion-body">
                            Say goodbye to bulky software installations. Text Transformer runs directly in your browser, ensuring hassle-free usage.
                        </div>
                    </div>
                </div>
            </div>

            <div>

                {/* <button className="btn btn-primary"  onClick={modeSwitch} type="submit">Dark Mode</button> */}
                {/* <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" onChange={modeSwitch} role="switch" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark mode.</label>
                </div> */}
            </div>
        </div>
    )
}
