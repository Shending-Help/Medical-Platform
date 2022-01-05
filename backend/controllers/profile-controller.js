
const DUMMY_USER = [
    { id: 999, type: "doc", name: "mohamed", specil: "heart" },
    { id: 9990, type: "docx", name: "mohamed", specil: "heart" },
    { id: 9995, type: "docxxxx", name: "mohamed", specil: "heart" }
];

const getProfileID = (req, res, next) => {
    const profileID = req.params.pid;
    const profile = DUMMY_USER.find(o => o.id === Number(profileID))
    
    console.log('GET Response in profile and uid is: ' + profileID);
    
    if (!profile) { return res.status(404).json({ message: 'not found' }) }
    res.json({
        message: 'Profile id is ' + profileID,
        user: profile
    })
}

exports.getProfileID = getProfileID;