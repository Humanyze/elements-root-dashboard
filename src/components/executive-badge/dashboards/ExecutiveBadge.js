import React, { Fragment } from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import ExecutiveTabRoutes from './executive-tabs/ExecutiveTabRoutes';
import ExecutiveHeaderNav from './executive-header-nav/ExecutiveHeaderNav';
import FilterRoutes from './executive-filter-routes/FilterRoutes';
import DashboardRoutes from './DashboardRoutes';

import { elementsReact, elementsRedux, routerPaths as RouterPaths } from 'ElementsWebCommon';

const {
  LoadingUI,
  ErrorBoundary,
  MetricDateSelectorBlock ,
  MetricFilterBlockCreator,
  DashboardGlobalErrorMessage,
  DashboardBodyWrapper,
  MetricGrid,
  MetricGridRight,
  MetricGridBottom,
  MetricGridChartWrapper,
  MetricSidebar,
} = elementsReact;

const {
  routeActions: { digitalDashboardLeft, },
  deploymentActions: { setExecutiveGroups, setSelectedDeploymentById, },
  deploymentSelectors: { getSelectedDeploymentName, },
  groupUISelectors: { getDefaultGroupIds, },
} = elementsRedux;

const enhance = compose(
  connect(
    (state) => ({
      deploymentName: getSelectedDeploymentName(state),
      defaultGroupIds: getDefaultGroupIds(state),
    }),
    { setSelectedDeploymentById, setExecutiveGroups, digitalDashboardLeft, }
  ),
  lifecycle({
    async componentDidMount() {
      const {
        match: {
          params: { id, },
        },
        setSelectedDeploymentById,
        setExecutiveGroups,
      } = this.props;

      await setSelectedDeploymentById(id, `${RouterPaths.basePath}${RouterPaths.selectDeployment}`);
      setExecutiveGroups();
    },
    componentWillUnmount() {
      this.props.digitalDashboardLeft();
    },
  })
);

const ExecutiveFilterBlock = MetricFilterBlockCreator(FilterRoutes);

export const DigitalPure = ({ deploymentName, defaultGroupIds, }) => {
  return (
    <DashboardBodyWrapper>
      <ErrorBoundary ErrorMessage={DashboardGlobalErrorMessage}>
        {
          (deploymentName && defaultGroupIds && defaultGroupIds.length) ? (
            <Fragment>
              <ExecutiveHeaderNav deploymentName={deploymentName} deploymentSelectionPath={RouterPaths.selectDeployment}/>
              <MetricGrid>
                <MetricDateSelectorBlock/>
                <MetricGridBottom>
                  <MetricSidebar/>
                  <MetricGridRight>
                    <ExecutiveTabRoutes/>
                    <MetricGridChartWrapper>
                      <ExecutiveFilterBlock/>
                      <DashboardRoutes />
                    </MetricGridChartWrapper>
                  </MetricGridRight>
                </MetricGridBottom>
              </MetricGrid>
            </Fragment>
          ) : (
            <LoadingUI />
          )}
      </ErrorBoundary>
    </DashboardBodyWrapper>
  );
};

const Digital = enhance(DigitalPure);

export default Digital;
