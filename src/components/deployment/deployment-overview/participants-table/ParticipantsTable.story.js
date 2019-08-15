import React from 'react';
import { storiesOf } from '@storybook/react';
import { RouterContext, StoreContext } from 'TestUtils/contextCreators.js';

import ParticipantsTable from './ParticipantsTable';
import { translations } from 'Src/tests/contextCreators';
const defaultProps = {
    translations: translations,
    showLoading: false,
    numberOfPages: 30,
    activePageNumber: 17
};

const onLoad = {
    showLoading:  true
};

const onQuickSwitch = {
    paginationLoading: true
};

const normalParticipants = {
    participants: [
        {
            "last_name": null,
            "last_collection_date": "2017-07-21",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Tech DC",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 312,
            "first_name": null,
            "uuid": "e885ea25-ee56-46c2-b4b6-e70f3438b8d4",
            "active_digital": "Y",
            "first_collection_date": "2016-04-01",
            "working_hours_start": "8",
            "role": "Firmware Engineer",
            "email": "michael@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "19489ade3d3981fe456bed421ad585e7_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 128,
            "active_badge": "N",
            "top_performer": null,
            "created": "2016-05-31T13:19:57+00:00",
            "gender": "M",
            "teams_managed": null,
            "alias": "michael@humanyze.com",
            "badge_id": "2275",
            "avatar": "",
            "resource_uri": "/api/v1/participant/312/"
        },
        {
            "last_name": null,
            "last_collection_date": "2017-11-27",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Management & Operations",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 313,
            "first_name": null,
            "uuid": "d3f45d6e-10f4-45ba-8bf2-bf1488afeab1",
            "active_digital": "Y",
            "first_collection_date": "2016-01-13",
            "working_hours_start": "8",
            "role": "COO",
            "email": "daniel@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "7f0945a32d6c00613a5d9d4af02eed90_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1111,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:19:58+00:00",
            "gender": "M",
            "teams_managed": [
                1111
            ],
            "alias": "DanielO",
            "badge_id": "535",
            "avatar": "",
            "resource_uri": "/api/v1/participant/313/"
        },
        {
            "last_name": null,
            "last_collection_date": "2017-11-09",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Analytics",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 314,
            "first_name": null,
            "uuid": "67b2a675-a5fb-4b5e-87a5-fa24ba7ff9c2",
            "active_digital": "N",
            "first_collection_date": "2016-01-08",
            "working_hours_start": "8",
            "role": "Analytics Lead",
            "email": "laura@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": null,
            "primary_team_id": 61,
            "active_badge": "N",
            "top_performer": null,
            "created": "2016-05-31T13:19:58+00:00",
            "gender": "F",
            "teams_managed": null,
            "alias": "laura2@humanyze.com",
            "badge_id": "2948",
            "avatar": "",
            "resource_uri": "/api/v1/participant/314/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-19",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Engineering",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 315,
            "first_name": null,
            "uuid": "ced98232-2e62-48a5-9888-152ba9ca4121",
            "active_digital": "Y",
            "first_collection_date": "2016-01-25",
            "working_hours_start": "8",
            "role": "Web Application Developer",
            "email": "lucas@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "5c2c9a9de65ebbc802db045cb75ff432_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1113,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:19:59+00:00",
            "gender": "M",
            "teams_managed": [
                1113
            ],
            "alias": "LucasB",
            "badge_id": "2337",
            "avatar": "",
            "resource_uri": "/api/v1/participant/315/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-05",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Analytics",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 316,
            "first_name": null,
            "uuid": "42119f92-1ec4-47ef-b706-4e2d852f4121",
            "active_digital": "Y",
            "first_collection_date": "2015-12-15",
            "working_hours_start": "8",
            "role": "Chief Scientist",
            "email": "taemie@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "206b8c6623e99a5258a3773e16be526e_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 61,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:19:59+00:00",
            "gender": "F",
            "teams_managed": [
                61
            ],
            "alias": "TaemieK",
            "badge_id": "949",
            "avatar": "",
            "resource_uri": "/api/v1/participant/316/"
        },
        {
            "last_name": null,
            "last_collection_date": "2016-03-08",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Analytics",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 317,
            "first_name": null,
            "uuid": "f6fadbab-5b44-4f51-aa4e-df4c1cd9b802",
            "active_digital": "Y",
            "first_collection_date": "2016-01-07",
            "working_hours_start": "8",
            "role": "Solutions Analyst",
            "email": "beth@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": null,
            "primary_team_id": 61,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:19:59+00:00",
            "gender": "F",
            "teams_managed": null,
            "alias": "beth@humanyze.com",
            "badge_id": "2886",
            "avatar": "",
            "resource_uri": "/api/v1/participant/317/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-01-23",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Analytics",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 318,
            "first_name": null,
            "uuid": "c555c5f6-6606-453b-ba52-9a42d72788f0",
            "active_digital": "Y",
            "first_collection_date": "2016-01-08",
            "working_hours_start": "8",
            "role": "Analyst Intern",
            "email": "bora@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "2820ec6c1b1d60c358d5a080761e9ebd_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 61,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:00+00:00",
            "gender": "F",
            "teams_managed": null,
            "alias": "BoraK",
            "badge_id": "2864",
            "avatar": "",
            "resource_uri": "/api/v1/participant/318/"
        },
        {
            "last_name": null,
            "last_collection_date": "2017-06-14",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Business",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 319,
            "first_name": null,
            "uuid": "b4503865-56a6-456e-9c62-aee3c1476b00",
            "active_digital": "Y",
            "first_collection_date": "2016-04-13",
            "working_hours_start": "8",
            "role": "Customer Relationship Manager",
            "email": "josh@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "c49d7b0c3d79e1105e2726d68f5ad8ef_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 60,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:00+00:00",
            "gender": "M",
            "teams_managed": null,
            "alias": "josh@humanyze.com",
            "badge_id": "2785",
            "avatar": "",
            "resource_uri": "/api/v1/participant/319/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-12",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Customer Success",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 320,
            "first_name": null,
            "uuid": "4eef43ad-c524-495c-b2d8-6e1a19b40331",
            "active_digital": "Y",
            "first_collection_date": "2016-02-25",
            "working_hours_start": "8",
            "role": "SVP of Growth",
            "email": "jeremy@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "805c6f0ad8aa7ef7f82e380e8a08f4aa_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1109,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:00+00:00",
            "gender": "M",
            "teams_managed": [
                1109
            ],
            "alias": "JeremyD",
            "badge_id": "2730",
            "avatar": "",
            "resource_uri": "/api/v1/participant/320/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-25",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Product",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 321,
            "first_name": null,
            "uuid": "4eac11cc-6e77-4ea5-a542-41e6e6f738c2",
            "active_digital": "Y",
            "first_collection_date": "2016-01-15",
            "working_hours_start": "8",
            "role": "CPO",
            "email": "michelle@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "254b5ebcb31ae4310bf9f393d9590f4d_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1116,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:01+00:00",
            "gender": "F",
            "teams_managed": [
                1113,
                1116,
                1110
            ],
            "alias": "MichelleB",
            "badge_id": "1741",
            "avatar": "",
            "resource_uri": "/api/v1/participant/321/"
        },
        {
            "last_name": null,
            "last_collection_date": "2017-09-12",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Customer Success",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 322,
            "first_name": null,
            "uuid": "95280bc5-6860-4d60-b289-a9ade51aa2ba",
            "active_digital": "Y",
            "first_collection_date": "2016-01-13",
            "working_hours_start": "8",
            "role": "Engineer",
            "email": "burak@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "1bdb768f2bb03ce366fad0f4939c27b1_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1109,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:02+00:00",
            "gender": "M",
            "teams_managed": null,
            "alias": "BurakA",
            "badge_id": "2603",
            "avatar": "",
            "resource_uri": "/api/v1/participant/322/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-27",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Hardware",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 323,
            "first_name": null,
            "uuid": "cc78e6ef-fc7e-4076-9d43-0e16bc76da34",
            "active_digital": "Y",
            "first_collection_date": "2016-01-14",
            "working_hours_start": "8",
            "role": "Technology",
            "email": "derek@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "b7a7df2699a2f50ff12374a8673e928d_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1112,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:02+00:00",
            "gender": "M",
            "teams_managed": null,
            "alias": "DerekH",
            "badge_id": "2284",
            "avatar": "",
            "resource_uri": "/api/v1/participant/323/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-25",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Management & Operations",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 324,
            "first_name": null,
            "uuid": "6c75f669-aa61-4858-8707-e77206fda023",
            "active_digital": "Y",
            "first_collection_date": "2016-01-15",
            "working_hours_start": "8",
            "role": "CEO",
            "email": "ben@humanyze.com",
            "updated": "2017-10-30T21:10:35+00:00",
            "dggt_hash": "5005999c05bec09c4873d414fef0e93d_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1111,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:03+00:00",
            "gender": "M",
            "teams_managed": [
                1109,
                1110,
                1111,
                1112,
                1113,
                1114,
                1115,
                1116
            ],
            "alias": "BenW",
            "badge_id": "1950",
            "avatar": "",
            "resource_uri": "/api/v1/participant/324/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-02-08",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Engineering",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 325,
            "first_name": null,
            "uuid": "fbe741b3-876d-401c-a036-e75c8ee5cb3f",
            "active_digital": "Y",
            "first_collection_date": "2016-06-02",
            "working_hours_start": "8",
            "role": "CTO",
            "email": "tuomas@humanyze.com",
            "updated": "2017-10-30T21:10:24+00:00",
            "dggt_hash": "76d168e33dad722d7aca0fa9a14951cb_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1113,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:20:03+00:00",
            "gender": "M",
            "teams_managed": [
                1112
            ],
            "alias": "TuomasJ",
            "badge_id": "3232",
            "avatar": "",
            "resource_uri": "/api/v1/participant/325/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-25",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "QA",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 326,
            "first_name": null,
            "uuid": "64067bc2-4c46-458b-aae3-fb2d3e1251e3",
            "active_digital": "Y",
            "first_collection_date": "2016-04-14",
            "working_hours_start": "8",
            "role": "QA Engineer",
            "email": "alex@humanyze.com",
            "updated": "2017-10-30T21:10:35+00:00",
            "dggt_hash": "b63b37352f42de554120483c38a22842_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1110,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-05-31T13:44:24+00:00",
            "gender": "M",
            "teams_managed": [
                1110
            ],
            "alias": "AlexD",
            "badge_id": "3449",
            "avatar": "",
            "resource_uri": "/api/v1/participant/326/"
        },
        {
            "last_name": null,
            "last_collection_date": "2016-08-09",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Analytics",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 598,
            "first_name": null,
            "uuid": "4ff50bd2-dee2-4952-9956-c52fbfb789a1",
            "active_digital": "Y",
            "first_collection_date": "2016-06-01",
            "working_hours_start": "8",
            "role": "Summer Intern",
            "email": "stephen@humanyze.com",
            "updated": "2017-10-30T21:10:35+00:00",
            "dggt_hash": "31b9753fe97bec6e016293f776631ec3_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 61,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-06-27T19:52:30+00:00",
            "gender": "M",
            "teams_managed": null,
            "alias": "stephen@humanyze.com",
            "badge_id": "2927",
            "avatar": "",
            "resource_uri": "/api/v1/participant/598/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-13",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Analytics",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 599,
            "first_name": null,
            "uuid": "0e2d512b-5589-4ed8-93e7-9d32d1896969",
            "active_digital": "Y",
            "first_collection_date": "2016-06-17",
            "working_hours_start": "8",
            "role": "Statistical Analyst",
            "email": "zhongke@humanyze.com",
            "updated": "2017-10-30T21:10:35+00:00",
            "dggt_hash": "c99067936b7c168589974fd478eec4a8_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 61,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-06-27T19:52:30+00:00",
            "gender": "M",
            "teams_managed": null,
            "alias": "ZhongkeZ",
            "badge_id": "2949",
            "avatar": "",
            "resource_uri": "/api/v1/participant/599/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-26",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "18",
            "primary_team": "Management & Operations",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 1220,
            "first_name": null,
            "uuid": "07d728aa-6337-4adc-81e8-b843317592c4",
            "active_digital": "Y",
            "first_collection_date": "2016-11-01",
            "working_hours_start": "8",
            "role": "Admin",
            "email": "nicole@humanyze.com",
            "updated": "2017-10-30T21:10:26+00:00",
            "dggt_hash": "4d425b88d78ee89ee8d2e517273c8467_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1111,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-09-15T18:35:33+00:00",
            "gender": "F",
            "teams_managed": null,
            "alias": "NicoleF",
            "badge_id": "2755",
            "avatar": "",
            "resource_uri": "/api/v1/participant/1220/"
        },
        {
            "last_name": null,
            "last_collection_date": "2018-04-05",
            "creator": "/api/v1/user/1/",
            "working_hours_end": "17",
            "primary_team": "Engineering",
            "dataset": "/api/v1/dataset/5/",
            "manager": "Y",
            "timezone": "America/New_York",
            "id": 1221,
            "first_name": null,
            "uuid": "ed12d41b-d172-4453-a5b3-54d4a69817a7",
            "active_digital": "Y",
            "first_collection_date": "2016-09-13",
            "working_hours_start": "9",
            "role": "Platform Engineer",
            "email": "evan@humanyze.com",
            "updated": "2017-10-30T21:10:26+00:00",
            "dggt_hash": "ec8f0ef9207d0e16bcd22164a9bc9046_64_efeb5865dba0cf5054a6656138faf7ea",
            "primary_team_id": 1113,
            "active_badge": "Y",
            "top_performer": null,
            "created": "2016-09-15T18:35:33+00:00",
            "gender": "M",
            "teams_managed": [
                1113
            ],
            "alias": "EvanO",
            "badge_id": "2774",
            "avatar": "",
            "resource_uri": "/api/v1/participant/1221/"
        },
        {
            "last_name": "Grush",
            "last_collection_date": "2017-09-12",
            "creator": "/api/v1/user/528/",
            "working_hours_end": "18",
            "primary_team": "Tech HYPE",
            "dataset": "/api/v1/dataset/5/",
            "manager": "N",
            "timezone": "America/New_York",
            "id": 1232,
            "first_name": "Ian",
            "uuid": "987eb0cd-ab42-4b5e-9c55-e0521891e3a5",
            "active_digital": "Y",
            "first_collection_date": "2016-11-17",
            "working_hours_start": "8",
            "role": "Python Developer",
            "email": "ian@humanyze.com",
            "updated": "2017-10-30T21:10:26+00:00",
            "dggt_hash": null,
            "primary_team_id": 129,
            "active_badge": "N",
            "top_performer": null,
            "created": "2016-11-17T16:58:55+00:00",
            "gender": "M",
            "teams_managed": null,
            "alias": "ian@humanyze.com",
            "badge_id": "1499",
            "avatar": "",
            "resource_uri": "/api/v1/participant/1232/"
        }
    ],
    loading: false
}

const createComp = (props) => <StoreContext><RouterContext><ParticipantsTable {...defaultProps} {...props}/></RouterContext></StoreContext>;

storiesOf('Participants Table', module)
    .add('loading', () => createComp(onLoad))
    .add('quick Pagination Load', () => createComp(onQuickSwitch))
    .add('Stable With Full Participants', () => createComp(normalParticipants));