import { v4 as uuidv4 } from 'uuid';

let user = [];

export const getUser = (request, response) => {
    response.send(user);
}

export const createUser = (request, response) => {
    // console.log(request.body);
    const userBody = request.body;
    // users.push(user);
    // const uid = uuidv4();
    // const userWithId = {... users,id: uuidv4()};
    user.push({ ...userBody, id: uuidv4() });
    response.send(`user added named -- ${userBody.f_name}`);
}

export const getUserById = (request, response) => {
    // console.log(request.params);
    const { id } = request.params;
    const foundUser = user.find((user) => user.id == id);
    response.send(foundUser);
}

export const deleteUserById = (request, response) => {
    const { id } = request.params;
    const userBody = request.body;
    user = user.filter((user) => user.id != id);
    response.send(`user ${userBody.f_name} with id ${id} deleted`);
}

export const updateUserDetailsById = (request, response) => {
    const { id } = request.params;
    const userBody = request.body;
    console.log(`body ${userBody}`);
    const { f_name, l_name, location } = userBody;

    const usertobeUpdated = user.find((usertobeUpdated) => usertobeUpdated.id == id);

    if (f_name) usertobeUpdated.f_name = f_name;
    if (l_name) usertobeUpdated.l_name = l_name;
    if (location) usertobeUpdated.location = location;

    response.send(`user ${userBody.f_name} has been update`);
}