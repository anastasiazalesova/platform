import React from 'react';

export function coursesMapProcessor(coursesMap, handleArguments) {
  Array.from(coursesMap.values()).map(course => {
    Array.from(course.modsMap.values()).map(mod => {
      Array.from(mod.disciplinesMap.values()).map(discipline => {
        handleArguments(course, mod, discipline);
      })
    })
  })
}
