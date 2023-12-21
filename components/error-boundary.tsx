import Error from "next/error";
import { Component, PropsWithChildren } from "react";

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  PropsWithChildren<unknown>,
  State
> {
  constructor(props: PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public render() {
    return this.state.hasError ? <h1>Error</h1> : this.props.children;
  }
}
