import React, { useState } from "react";
import ErrorPage from "./ErrorPage";

// Nam omogoča, da si naredimo funkcijo, ki meče asinhrone napake
export function getThrowAsyncError() {
  const [, setState] = useState(); //state se ne uporablja dejansko

  return (error) => {
    setState(() => {
      throw error; //Le tako lahko asinhrono napako ujeme ErrorBoundary
    });
  };
}

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
    this.error;
  }

  static getDerivedStateFromError(error) {
    // Spremenimo stanje in shranimo napako
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <ErrorPage
          error={<> {error ? error.toString() : "Error, check dev console."}</>}
        />
      );
    }

    //Če ni napake se normalno prikaže
    return this.props.children;
  }
}
