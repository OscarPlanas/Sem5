import Question from '../model/Question';
import { Request, Response } from 'express';

const createQuestion = async (req: Request, res: Response) => {
    const { ask, user, booking } = req.body;
    const newQuestion = new Question({ ask, user, booking });
    const questionSaved = await newQuestion.save();
    res.status(201).json(questionSaved);
}

const getQuestions = async (req: Request, res: Response) => {
    const questions = await Question.find().populate('user', 'booking');
    return res.json(questions);
}

const getQuestionById = async (req: Request, res: Response) => {
    const questionFound = await Question.findById(req.params.questionId);
    res.status(200).json(questionFound);
}

const updateQuestionById = async (req: Request, res: Response) => {
    const updatedQuestion = await Question.findByIdAndUpdate(req.params.questionId, req.body, {
        new: true
    });
    res.status(200).json(updatedQuestion);
}

const deleteQuestionById = async (req: Request, res: Response) => {
    const { questionId } = req.params;
    await Question.findByIdAndDelete(questionId);
    res.status(204).json();
}

export default { createQuestion, getQuestions, getQuestionById, updateQuestionById, deleteQuestionById };