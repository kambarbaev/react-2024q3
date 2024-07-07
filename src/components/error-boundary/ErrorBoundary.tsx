import { Component } from 'react';
import styles from './ErrorBoundary.module.css';
import { ErrorBoundaryState } from './ErrorBoundary.props';
import Button from '../button/Button';

class ErrorBoundary extends Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    return this.setState({ hasError: true });
  }

  pageReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <section className={styles['error']}>
          <h2 className={styles['title']}>Something went wrong</h2>
          <h3 className={styles['subtitle']}>Please reload the page!</h3>
          <Button className={styles['reload']} onClick={this.pageReload} text="Reload page" />
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
