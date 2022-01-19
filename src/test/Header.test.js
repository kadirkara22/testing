import React from "react";
import App from "../App";
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom'


test("renders without crashing", () => {
    render(<App />);
    const linkElement = screen.getByText("Emoji Search");
    expect(linkElement).toBeInTheDocument();

});





