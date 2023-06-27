
import CandidateSchema from '../Models/candidateModel'
import { Request, Response } from 'express';

export default class CandidateController{

    //Add validation 
    
    public async addCandidate (req: Request, res: Response) {                
        try{
            const candidate = await CandidateSchema.create(req.body);
            return res.status(200).json(candidate);
            }
        catch(error){
            return res.status(404).json({ message: error });
        }
    }

    public async getAllCandidates (req: Request, res: Response) {
        try {
            const candidates = await CandidateSchema.find();
            return res.status(200).json(candidates);
        } catch (error) {
            return res.status(404).json({ message: error });
        }
    }

    public async getCandidateById (req: Request, res: Response) {           
        try {
            const Candidate = await CandidateSchema.findById(req.params.id);
            if(Candidate)
                return res.status(200).json(Candidate);
            return res.status(404).json({message: "candidate not fount"});
        } catch (error) {
            return res.status(404).json({ message: error });
        }
    }

    public async updateCandidate (req: Request, res: Response) {           
        try {
            const candidate = await CandidateSchema.findByIdAndUpdate(req.params.id, req.body);
            if(candidate)
                return res.status(200).json(candidate);
            return res.status(404).json("candidate not found");
        } catch (error) {
            res.status(404).json({ message: error });
        }
    }

    public async deleteCandidate (req: Request, res: Response) {           
        try {
            const candidate = await CandidateSchema.findByIdAndDelete(req.params.id);
            if(candidate)
                return res.status(200).json(candidate);
            return res.status(404).json("candidate not found");
        } catch (error) {
            res.status(404).json({ message: error });
        }
    }
    
}