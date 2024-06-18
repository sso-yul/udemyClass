import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {

    {/* 익명함수 안의 함수는 () 되어 있어도 바로 실행되지 않는다. 버튼이니 버튼 눌러야 실행된다 */ }
    {/* label 사용 시:  <TabButtom label="Components"></TabButtom> */ }

    const [selectedTopic, setSelectedTopic] = useState("");


    function handleSelect(selectedButton) {
        // selectedButton => components, JSX, props, state
        // console.log("selectedButton: ", selectedButton);
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                // buttonsContainer="menu"
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onClick={() => handleSelect("components")}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "jsx"}
                            onClick={function () { handleSelect("jsx") }
                            }>
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "props"}
                            onClick={() => handleSelect("props")}
                        >
                            Prpos
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === "state"}
                            onClick={() => handleSelect("state")}
                        >
                            State
                        </TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    )
}