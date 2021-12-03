import express from 'express';
import userRoutes from './authenticated/userRoutes.js';
// import companyRoutes from './authenticated/companyRoutes.js';

const apiRouterV2 = express.Router();

apiRouterV2.use('/users', userRoutes);
// apiRouterV2.use('/companies', companyRoutes);

export default apiRouterV2;
