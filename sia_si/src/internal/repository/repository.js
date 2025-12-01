import { CareerRepository } from './career.repository.js';
import { SubjectRepository } from './subject.repository.js';

export function createRepository() {
  return {
    careerRepository: new CareerRepository(),
    subjectRepository: new SubjectRepository(),
  };
}
