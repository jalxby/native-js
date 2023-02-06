import React from "react";
import {StudentType} from "../02/02";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true
}

export const cityOfLiveIn = (student: StudentType, city: string) => student.address.city.title === city