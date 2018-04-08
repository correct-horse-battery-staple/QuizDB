import React from 'react';
import { connect } from 'react-redux';

import {
  fetchStats,
} from '../actions/StatsActions';

// Components
import SearchForm from 'src/components/search/SearchForm';
import RootCredits from 'src/components/RootCredits';
import StatsContainer from 'src/components/stats/StatsContainer';

import {
  // Divider
} from 'semantic-ui-react';

class PageStats extends React.Component {
  render() {
    const p = this.props;
    return  <div className="quizdb-stats">
      <SearchForm
        onSearch={() => {
          p.dispatch(fetchStats({
            searchQuery: p.search.query,
            searchFilters: p.search.filters
          }));
        }}
      />
      <RootCredits/>
      <StatsContainer/>
    </div>

  }
}
const mapStateToProps = state => {
  return {
    search: state.search,
  }
}
PageStats = connect(
  mapStateToProps
)(PageStats)

export default PageStats;
