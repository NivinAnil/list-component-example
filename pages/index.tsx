import AssessmentCard from '@/components/AssessmentCard';

import assessments from '../data/data';

export default function Home() {
  return (
    <>
      {assessments.map((assessment) => (
        <AssessmentCard
          id={assessment.assessment_id}
          name={assessment.assessment_name}
          createdBy={assessment.created_by}
          type={assessment.assessment_type}
          maxScore={assessment.maximum_score}
          minScore={assessment.minimum_score}
        />
      ))}
    </>
  );
}
