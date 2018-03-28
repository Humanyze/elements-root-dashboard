import React from 'react';
import ActionSubBar from './action-sub-bar/ActionSubBar';
import ParticipantsTable from './participants-table/ParticipantsTable';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router';
import queryString from 'query-string';

import { getSelectedDeployment } from 'Redux/deployment/deploymentReducer';
import { setSelectedDeploymentId } from 'Redux/deployment/deploymentActions';
import { requestParticipantsData } from 'Redux/participants/participantsActions';
import { setPage } from 'Redux/participants-ui/participantsUIActions';
import { getVisibleParticipants } from 'Redux/participants/participantsReducer';
import { fetchDeploymentById } from 'Redux/deployment/deploymentActions';


const onPropUpdate = (props) => {
    const { location: { search }, match: { params: { datasetId } } } = props;

    const { perPage = '20', page = '1' } = queryString.parse(search);

    const pageNumber = parseInt(page, 10);
    const limit = parseInt(perPage, 10);
    const dataId = parseInt(datasetId, 10);

    props.setPage(pageNumber);
    props.requestParticipantsData(dataId, limit, pageNumber);
    props.setSelectedDeploymentId(dataId);
};

const withDidMount = lifecycle({
    componentWillMount() {
        onPropUpdate(this.props);
    },
    componentWillReceiveProps(props) {
        const { location: { search } } = props;

        const {
            // perPage = '20',
            page } = queryString.parse(search);
        const { page: oldPage } = queryString.parse(this.props.location.search);
        const pageNumber = parseInt(page, 10);

        if (pageNumber && parseInt(oldPage, 10) !== pageNumber) props.setPage(pageNumber);
    }

});

const enhance = compose(
    withDidMount
);

export const DeploymentOverviewPure = ({ selectedDeployment, participants, showLoading, match: { params: { datasetId, perPage, page } }, setSelectedDeploymentId, fetchDeploymentById, requestParticipantsData }) => {
    if (!selectedDeployment && !showLoading) {
        fetchDeploymentById(datasetId);
    }

    return (
        <div>
            <ActionSubBar/>
            <ParticipantsTable participants={participants} showLoading={showLoading}/>
        </div>
    );
};

const DeploymentOverview = connect(
    (state) => ({
        selectedDeployment: getSelectedDeployment(state),
        participants: getVisibleParticipants(state),
        showLoading: state.participants.requestPending || state.deployment.requestPending

    }),
    { setSelectedDeploymentId, requestParticipantsData, fetchDeploymentById, setPage },
)(withRouter(enhance(DeploymentOverviewPure)));

export default DeploymentOverview;