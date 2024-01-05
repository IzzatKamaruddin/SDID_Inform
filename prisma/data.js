
const { Prisma } = require('@prisma/client');

 const mbbsub = [
    {
        State : 'Malaysia',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Johor',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Kedah',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Kelantan',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Pahang',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Perlis',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Penang',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Malaysia',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Johor',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Kedah',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Kelantan',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Pahang',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Perlis',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
    {
        State : 'Penang',
        Quarter :'3Q 2023',
        Indicator :'5G',
        Subscriptions :40997,
    },
];

const fbbsub = [
    {
        state : 'Malaysia',
        declaration_quarter :9,
        declaration_year :2019,
        total_subs :40997,
    },
    {
        state : 'Johor',
        declaration_quarter :9,
        declaration_year :2019,
        total_subs :40997,
    },
    {
        state : 'Kedah',
        declaration_quarter :9,
        declaration_year :2019,
        total_subs :40997,
    },
    {
        state : 'Kelantan',
        declaration_quarter :9,
        declaration_year :2019,
        total_subs :40997,
    },
    {
        state : 'Pahang',
        declaration_quarter :9,
        declaration_year :2019,
        total_subs :40997,
    },
    {
        state : 'Perlis',
        declaration_quarter :9,
        declaration_year :2019,
        total_subs :40997,
    },
    {
        state : 'Penang',
        declaration_quarter :9,
        declaration_year :2019,
        total_subs :40997,
    },
    {
        state : 'Malaysia',
        declaration_quarter :9,
        declaration_year :2020,
        total_subs :40997,
    },
    {
        state : 'Johor',
        declaration_quarter :9,
        declaration_year :2020,
        total_subs :40997,
    },
    {
        state : 'Kedah',
        declaration_quarter :9,
        declaration_year :2020,
        total_subs :40997,
    },
    {
        state : 'Kelantan',
        declaration_quarter :9,
        declaration_year :2020,
        total_subs :40997,
    },
    {
        state : 'Pahang',
        declaration_quarter :9,
        declaration_year :2020,
        total_subs :40997,
    },

    {
        state : 'Perlis',
        declaration_quarter :9,
        declaration_year :2020,
        total_subs :40997,
    },

    {
        state : 'Penang',
        declaration_quarter :9,
        declaration_year :2020,
        total_subs :40997,
    },
];

const postoffice = [
    {
        state : 'Malaysia',
        declaration_quarter : 9,
        declaration_year :2019,
        urban :40997,
        rural : 3586,
    },
];

const courier_infra = [
    {
        type :'Box',
        total : 3586,
    },
];


module.exports = {
    mbbsub,
    fbbsub,
    postoffice, 
    courier_infra,
  };