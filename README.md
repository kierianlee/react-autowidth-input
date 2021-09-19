# React Autowidth Input

Highly configurable & extensible automatically sized input field built with hooks.

[![dependencies badge](https://david-dm.org/kierien/react-autowidth-input.svg)](https://www.npmjs.com/package/react-autowidth-input?activeTab=dependencies)
[![npm version](https://badge.fury.io/js/react-autowidth-input.svg)](https://www.npmjs.com/package/react-autowidth-input)

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

Callback function to be fired on input resize. `newWidth` does not include width specified by `extraWidth` (see [above for `extraWidth` prop](#extrawidth))

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

### placeholderIsMinWidth

_placeholderIsMinWidth={boolean}_

If set to true, the input will never resize to be smaller than the width of the placeholder.

```jsx
import React from "react";
import AutowidthInput from "react-autowidth-input";

const MyComponent = () => {
    return <AutowidthInput placeholderIsMinWidth={true}/>
};

...
```

### minWidth

_minWidth={number}_

If set, specifies the minimum width of input element. Width specified by `extraWidth` is applied anyway, so actual minimum width is actually `extraWidth + minWidth` (see [above for `extraWidth` prop](#extrawidth))

```jsx
import React from "react";
import AutowidthInput from "react-autowidth-input";

const MyComponent = () => {
    return <AutowidthInput minWidth={15}/>
};

...
```

## Notes

This component was inspired by Jed Watson's react-input-autosize, but rebuilt with modern react APIs.

## Contributors

-   [kierien](https://github.com/kierien)
-   [burtek](https://github.com/burtek)