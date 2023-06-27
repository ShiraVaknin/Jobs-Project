
import express from 'express'
import CandidateController from '../Controllers/candidateController'

const router = express.Router()
const candidateController = new CandidateController();

router.get('/', candidateController.getAllCandidates);
router.get('/:id', candidateController.getCandidateById);
router.post('/', candidateController.addCandidate);
router.put('/:id', candidateController.updateCandidate);
router.delete('/:id', candidateController.deleteCandidate);

export default router;