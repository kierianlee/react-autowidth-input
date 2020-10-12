import React from "react";
import { render, screen } from "@testing-library/react";

import AutowidthInput from "../src/index";

it(`renders default`, () => {
    render(
        <>
            <AutowidthInput />
        </>
    );

    expect(screen.getByTestId("wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("sizer")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
});

it(`renders placeholder`, () => {
    render(
        <>
            <AutowidthInput placeholder="test" />
        </>
    );

    expect(screen.getByTestId("placeholder-sizer")).toBeInTheDocument();
});
