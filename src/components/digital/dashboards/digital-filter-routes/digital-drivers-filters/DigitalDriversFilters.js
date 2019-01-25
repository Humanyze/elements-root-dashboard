import React, { Fragment } from 'react';
import { createFilterComponent } from 'Src/components/digital/dashboards/digital-filter-routes/createFilterComponent';
import { filterConfigs } from 'Src/components/digital/dashboards/digital-filter-routes/filterConfigs';
import BackToEmberLink from 'Common/back-to-ember-link/BackToEmberLink';

const DigitalDriversHoursFilter = createFilterComponent(
  filterConfigs.digitalDriversHours
);

const DigitalDriversUnitFilter = createFilterComponent(
  filterConfigs.digitalDriversUnit
);

const DigitalDriversFilters = () => (
  <Fragment>
    <DigitalDriversHoursFilter />
    < DigitalDriversUnitFilter />
    <BackToEmberLink createLinkUrl={({ datasetId }) => `/digital/dover_top/dover_drivers?dataset=${datasetId}`}/>
  </Fragment>
);

export default DigitalDriversFilters;
