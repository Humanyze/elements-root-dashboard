import React from 'react';
import RouterPaths from 'Src/routerPaths';
import { Route, Switch } from 'react-router-dom';
import { RedirectWithSearch } from 'Src/components/common/link-with-search/LinkWithSearch';
import DigitalAllocation from 'Src/components/common/data-vis-components/digital-allocation/DigitalAllocation';
import DigitalDrivers from 'Common/data-vis-components/digital-drivers/DigitalDrivers';
import AverageWorkdayLength from 'Common/data-vis-components/average-workday-length/AverageWorkdayLength';

const WorkloadRoutes = () => {
  return (
    <Switch>
      <Route path={RouterPaths.workload__workdayLength} component={AverageWorkdayLength} />
      <Route path={RouterPaths.workload__drivers} component={DigitalDrivers} />
      <Route path={RouterPaths.workload__timeAllocation} component={DigitalAllocation} />
      <Route component={() => <RedirectWithSearch to={RouterPaths.workload__workdayLength} />} />
    </Switch>
  );
};

export default WorkloadRoutes;
