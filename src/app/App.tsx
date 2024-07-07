import { Component } from 'react';
import styles from './App.module.css';
import { Header, Main } from '../components';
import { People } from '../serviсes/api.props';
import { fetchApi } from '../serviсes/api';
import { AppState } from './App.props';

class App extends Component {
  state: AppState = {
    searchData: [],
    loading: false,
  };

  handleSearch = (searchString: string) => {
    this.setState({ loading: true });
    fetchApi(searchString).then((data) => {
      this.setState({ searchData: data.results, loading: false });
    });
  };

  updateSearchData = (data: People[]) => {
    this.setState({ searchData: data });
  };

  render() {
    const { searchData, loading } = this.state;

    return (
      <div className={styles['app']}>
        <Header updateSearchData={this.updateSearchData} handleSearch={this.handleSearch} />
        <Main searchData={searchData} loading={loading} />
      </div>
    );
  }
}

export default App;
