import React from "react";
import { createRoot } from "react-dom/client";
import { availableComponents } from "./js/availableComponents.js";

const components = document.querySelectorAll("script[type='text/jsx-component']");

components.forEach(component => {
    
    const innerText = component.innerText.trim();
    let componentData = null;
    try {
        componentData = JSON.parse(innerText);
    } catch (e) {
        console.log(e, 'Error parsing CMS data');
    }
    
    if (componentData) {
        const rootElement = document.getElementById(componentData.domRootId);
        const DynamicComponent = availableComponents[componentData.component];
        
        if (rootElement && DynamicComponent) {
            const componentRoot = createRoot(rootElement)
            componentRoot.render(<DynamicComponent {...componentData.props} />);
        }
    }
    
});
