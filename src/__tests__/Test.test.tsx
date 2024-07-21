
import { render , screen } from "@testing-library/react";


const MyTest = () => {
  return <div>Test</div>;
};

describe(" component MyTest", () => {
  test("doit contenir le texte 'test'", () => {
    render(<MyTest />);
    const element = screen.getByText(/test/i)
    expect(element).toBeInTheDocument()
  });
});
