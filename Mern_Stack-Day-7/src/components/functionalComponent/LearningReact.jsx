import Props from "./Props";
import State from "./State";

const LearningReact = () => {
    return (
        <div>
            <h1>Learning React</h1>
            <p>This is a Learning React Page.</p>
            <hr />
            <ol>
                <li>
                    <Props
                        hi="Welcome to Props"
                        grade="12"
                        age="17"
                        img="/vite.svg"
                    />
                </li>
                <li><State /></li>
            </ol>
        </div>
    );
}

export default LearningReact;
