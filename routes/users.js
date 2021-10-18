import express from 'express';
import {getUser,createUser,getUserById,deleteUserById,updateUserDetailsById} from '../controllers/users.js';

const router = express.Router();

let user = [];

router.get('/', getUser);

router.post('/', createUser);

router.get('/:id',getUserById);

router.delete('/:id',deleteUserById);

router.patch('/:id', updateUserDetailsById);

export default router;