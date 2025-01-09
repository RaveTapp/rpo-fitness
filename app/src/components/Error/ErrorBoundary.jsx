import React, { useState } from "react";
import ErrorPage from "./ErrorPage";

export function getThrowAsyncError(){
  const [state, setState] = useState();

  return (error) => {
    setState(() => {throw error});
  }
}

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
      this.error;
    }
  
    static getDerivedStateFromError() {
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      console.log(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        return <ErrorPage error={<>Error, check dev console.</>} />;
      }
  
      return this.props.children;
    }
  }