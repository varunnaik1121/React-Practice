import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RawJson from "./Projects/FinalApp/components/header";

cleanup()
test('test to render the rawJson',()=>{
    render(<RawJson></RawJson>);

   screen.debug()
})
