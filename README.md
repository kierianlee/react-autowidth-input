# React Autowidth Input

Highly configurable & extensible automatically sized input field built with hooks.

## Features

-   Works out of the box with zero config
-   Supports usage as a controlled or uncontrolled input
-   Supports custom refs
-   Miniscule bundle size

## Install

    npm install react-autowidth-input

## Quick Start

```jsx
import AutowidthInput from "react-autowidth-input";

<AutowidthInput
    value={inputValue}
    onChange={(event) => {
        // event.target.value contains the new value
    }}
/>;
```

## Additional Props

The component supports the following props in extension to the regular html input props.

### extraWidth

_extraWidth={number}_

Default: 16

The amount of additional space rendered after the input.

```jsx
import React from "react";
import AutowidthInput from "react-autowidth-input";

const MyComponent = () => {
    return <AutowidthInput extraWidth={16} />;
};

...
```

### wrapperClassName

_wrapperClassName={string}_

Class provided to the wrapper element encapsulating the input.

```jsx
import React from "react";
import AutowidthInput from "react-autowidth-input";

const MyComponent = () => {
    return <AutowidthInput wrapperClassName="my-class" />;
};

...
```

### wrapperStyle

_wrapperStyle={{}}_

Inline styles provided to the wrapper element encapsulating the input.

```jsx
import React from "react";
import AutowidthInput from "react-autowidth-input";

const myStyles = {
    padding: "1rem"
}

const MyComponent = () => {
    return <AutowidthInput wrapperStyle={myStyles}/>
};

...
```

### onAutoSize

_onAutoSize={(newWidth) => {}}_

Callback function to be fired on input resize.

```jsx
import React, {useState} from "react";
import AutowidthInput from "react-autowidth-input";

const MyComponent = () => {
    const [width, setWidth] = useState(0);

    const myFunction = (newWidth) => {
        setWidth(newWidth);
    }

    return <AutowidthInput onAutosize={myFunction}/>
};

...
```

### placeHolderIsMinWidth

_placeHolderIsMinWidth={boolean}_

If set to true, the input will never resize to be smaller than the width of the placeholder.

```jsx
import React from "react";
import AutowidthInput from "react-autowidth-input";

const MyComponent = () => {
    return <AutowidthInput placeHolderIsMinWidth={true}/>
};

...
```

## Notes

This component was inspired by Jed Watson's react-input-autosize, but rebuilt with modern react API's.

## Contributers

-   [kierien](https://github.com/kierien)
