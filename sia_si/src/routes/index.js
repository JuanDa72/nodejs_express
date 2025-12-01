
import { CareerHandler } from './career.handler.js';
import { SubjectHandler } from './subject.handler.js';

export const createHandler = (services) => {
  
  const careerHandler = new CareerHandler(services.careerService);
  const subjectHandler = new SubjectHandler(services.subjectService);

  careerHandler.setupRoutes();
  subjectHandler.setupRoutes();

  return {
    careerHandler,
    subjectHandler,
  };
};