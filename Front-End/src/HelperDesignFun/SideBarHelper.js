const routes = {
    sideBarTop: {
        patient: [
            { route: 'Home', path: '/' },
            { route: 'Appointments', path: '/appointments' },
            { route: 'Results', path: '/results' },
            { route: 'Roshita', path: '/roshita' },
        ],
        doctor: [
            { route: 'Home', path: '/' },
            { route: 'Appointments', path: '/appointments' },
            { route: 'Information', path: '/info' },
            { route: 'Patients', path: '/patients' },
        ],
        recep: [
            { route: 'Home', path: '/' },
            { route: 'Appointments', path: '/appointments' },
            { route: 'Doctors', path: '/doctors' },
            { route: 'Patients', path: '/patients' },
        ],

        admin: [
            { route: 'Home', path: '/' },
            { route: 'Appointments', path: '/appointments' },
            { route: 'Doctors', path: '/doctors' },
            { route: 'Patients', path: '/patients' },
            { route: 'Receptionists', path: '/receptionists' },
            { route: 'Admin', path: '/admin' },
        ],
    },
    sideBarbotton: [
        { route: 'Profile', path: '/profile' },
        { route: 'LogOut', path: '/' },
    ],
}

export const sideBarComponentTop=(userType)=>routes.sideBarTop[userType];;
export const sideBarComponentbotton=()=>routes.sideBarbotton;