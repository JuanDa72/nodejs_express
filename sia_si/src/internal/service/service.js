import { CareerService } from './career.service.js';
import { SubjectService } from './subject.service.js';

export const createService = (repos) => {
  const careerService = new CareerService(repos.careerRepository);
  const subjectService = new SubjectService(repos.subjectRepository, repos.careerRepository);

  return {
    careerService,
    subjectService,
  };
};
