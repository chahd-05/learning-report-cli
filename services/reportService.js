import { format } from "date-fns";

function buildReport(resources, resourceService) {
  const total = resourceService.countResources(resources);
  const totalDuration = resourceService.getTotalDuration(resources);
  const averageDuration = resourceService.getAverageDuration(resources);
  const byLevel = resourceService.countByLevel(resources);
  const byCategory = resourceService.countByCategory(resources);
  const mostCompleted = resourceService.getMostCompletedResource(resources);

  const formattedDate = format(
    new Date(mostCompleted.publishedAt),
    "dd/MM/yyyy"
  );

  return `
================================
 LEARNING RESOURCES REPORT
================================
Resources: ${total}
Beginner: ${byLevel.beginner}
Intermediate: ${byLevel.intermediate}
Advanced: ${byLevel.advanced}
Total duration: ${totalDuration} min
Average duration: ${averageDuration} min
...
Most completed:
${mostCompleted.title} - ${mostCompleted.completedBy.length} learners
Published: ${formattedDate}
`;
}

export { buildReport };