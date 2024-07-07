import { Component } from 'react';
import styles from './App.module.css';
import { Header } from './components';
import { People } from './serviсes/api.props';

class App extends Component {
  state = {
    searchData: null,
  };

  updateSearchData = (data: People[]) => {
    this.setState({ searchData: data });
  };

  render() {
    const { searchData } = this.state;
    console.log(searchData);

    return (
      <div className={styles['app']}>
        <Header updateSearchData={this.updateSearchData} />
        {searchData && <div>`${searchData}`</div>}
      </div>
    );
  }
}

export default App;
