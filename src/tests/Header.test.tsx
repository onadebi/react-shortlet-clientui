import jest from "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../components/header/Header";

export let homeTest = jest;


describe("Home component testing", () => {
  
  test('Home render test', ()=>{
     render(<Header type={true}/>);
    const search = screen.getByPlaceholderText(/location of interest/i);
    expect(search).toBeInTheDocument();
  })

  

  
});
