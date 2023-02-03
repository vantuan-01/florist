import config from '~/config/routes';

const navlink = [
    {
        name: 'home',
        config: config.home,
    },
    {
        name: 'about',
        config: config.about,
    },
    {
        name: 'shop',
        config: config.product,
    },
    {
        name: 'services',
        config: config.services,
    },
    {
        name: 'blog',
        config: config.blog,
    },
    // {
    //     name: 'contact',
    //     config: config.contact,
    // },
];

export default navlink;
