
const mapRequestToUserModel = (req) => {
    return {
        userName: req.body.username,
        password: req.body.password,
        roleName: req.body.role,
    };
};

const mapUserModelToResponse = (user) => {
    return {
        id: user.id,
        username: user.userName,
        password: user.password,
        role: user.roleName
    };
};

module.exports = {
    mapRequestToUserModel,
    mapUserModelToResponse
};