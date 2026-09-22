function countResources(resources) {
  return resources.length;
}

function getTotalDuration(resources) {
  return resources.reduce((total, resource) => {
    return total + resource.durationMinutes;
  }, 0);
}

function getAverageDuration(resources) {
  const totalDuration = getTotalDuration(resources);

  return Math.round(totalDuration / resources.length);
}

function countByLevel(resources) {
  return resources.reduce((counts, resource) => {
    const level = resource.level;

    counts[level] = (counts[level] || 0) + 1;

    return counts;
  }, {});
}

function countByCategory(resources) {
  return resources.reduce((counts, resource) => {
    const category = resource.category;

    counts[category] = (counts[category] || 0) + 1;

    return counts;
  }, {});
}

function getMostCompletedResource(resources) {
  return resources.reduce((mostCompleted, resource) => {
    if (resource.completedBy.length > mostCompleted.completedBy.length) {
      return resource;
    }

    return mostCompleted;
  });
}

function filterByCategory(resources, category) {
  return resources.filter((resource) => {
    return resource.category === category;
  });
}

export {
    countResources,
    getTotalDuration,
    getAverageDuration,
    countByLevel,
    countByCategory,
    getMostCompletedResource,
    filterByCategory
}