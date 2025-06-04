import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Nav from "../_component/_Header/nav";

describe('Nav Component', () => {
  it('유저 이름이 잘 적용이 되는지', () => {
    render(<Nav userName="Test User" />);
    expect(screen.getByText('Test User')).toBeInTheDocument();
  });
});