
import JobSchema, { IJob } from '../Models/jobsModel'
import { Request, Response } from 'express';
import error from '../error'

//const Job = mongoose.model('Job',JobSchema);

export default class JobController{

    public static  validate(job:IJob){
        //Chek why doesn't it throw the error name
        //move it for validation page
        if (job.id <= 0) 
            throw new Error('id must be a positive number');
        const MIN_JOB_NAME_LENGTH = 3;
        if (job.jobName.length < MIN_JOB_NAME_LENGTH) 
          throw new Error(`jobName must be at least ${MIN_JOB_NAME_LENGTH} characters long`);
        const MIN_COMPANY_DESCRIPTION_LENGTH = 10;
        if (!job.companyDescription || job.companyDescription.length < MIN_COMPANY_DESCRIPTION_LENGTH) 
          throw new Error(`companyDescription must be at least ${MIN_COMPANY_DESCRIPTION_LENGTH} characters long`);
        if (!job.demands || job.demands.length === 0) 
          throw new Error('demand must contain at least one item');
        if (typeof job.status !== 'boolean') 
          throw new Error('status must be a boolean value');
    }
    
    public async addJob (req: Request, res: Response) {                
        try{
            await JobController.validate(req.body);
            const job = await JobSchema.create(req.body);
            console.log(job)
            return res.status(200).json(job);
            }
        catch(error){
            return res.status(404).json({ message: error });
        }
    }

    public async getAllJobs (req: Request, res: Response) {
        try {
            const jobs = await JobSchema.find();
            return res.status(200).json(jobs);
        } catch (error) {
            return res.status(404).json({ message: error });
        }
    }

    public async getJobById (req: Request, res: Response) {           
        try {
            const job = await JobSchema.findById(req.params.id);
            if(job)
                return res.status(200).json(job);
            return res.status(404).json({message: "job not fount"});
        } catch (error) {
            return res.status(404).json({ message: error });
        }
    }

    public async updateJob (req: Request, res: Response) {           
        try {
            const job = await JobSchema.findByIdAndUpdate(req.params.id, req.body);
            if(job)
                return res.status(200).json(job);
            return res.status(404).json("job not found");
        } catch (error) {
            res.status(404).json({ message: error });
        }
    }

    public async deleteJob (req: Request, res: Response) {           
        try {
            const job = await JobSchema.findByIdAndDelete(req.params.id);
            if(job)
                return res.status(200).json(job);
            return res.status(404).json("job not found");
        } catch (error) {
            res.status(404).json({ message: error });
        }
    }
    
}