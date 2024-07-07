import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    return this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={styles['error']}>
          <h2>Something went wrong</h2>
          <h3>Please reload the page!</h3>
          <button onClick={() => window.location.reload()}>Reload</button>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
