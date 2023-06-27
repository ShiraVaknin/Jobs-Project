
import express from 'express'
import JobController from '../Controllers/jobController'

const router = express.Router()
const jobController = new JobController();

router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);
router.post('/', jobController.addJob);
router.put('/:id', jobController.updateJob);
router.delete('/:id', jobController.deleteJob);

export default router;