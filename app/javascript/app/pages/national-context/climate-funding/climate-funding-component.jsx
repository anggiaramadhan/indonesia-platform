import React, { PureComponent } from 'react';
import SectionTitle from 'components/section-title';
import { Input, Table } from 'cw-components';
import FundingOportunitiesProvider from 'providers/funding-oportunities-provider';
import PropTypes from 'prop-types';
import InfoDownloadToolbox from 'components/info-download-toolbox';
import styles from './climate-funding-styles.scss';

class ClimateFunding extends PureComponent {
  render() {
    const { title, description, data } = this.props;

    const defaultColumns = [
      'project_name',
      'mode_of_support',
      'sectors_and_topics',
      'description',
      'website_link'
    ];
    return (
      <div className={styles.page}>
        <SectionTitle title={title} description={description} />
        <div>
          <div className={styles.actions}>
            <Input
              onChange={value => console.info(value)}
              placeholder="Search"
              theme={styles}
            />
            <InfoDownloadToolbox
              className={{ buttonWrapper: styles.buttonWrapper }}
              slugs=""
              downloadUri="funding_opportunities"
              infoTooltipdata="Table data information"
              downloadTooltipdata="Download table data in .csv"
            />
          </div>
          <div className={styles.tableContainer}>
            <Table
              data={data && data}
              defaultColumns={defaultColumns}
              ellipsisColumns={[ 'description' ]}
              emptyValueLabel="Not specified"
              horizontalScroll
              titleLinks={[ [ { columnName: 'website_link', url: 'self' } ] ]}
            />
          </div>
        </div>
        <FundingOportunitiesProvider />
      </div>
    );
  }
}

ClimateFunding.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string
};

ClimateFunding.defaultProps = { data: null, title: null, description: null };

ClimateFunding.defaultProps = {};

export default ClimateFunding;
