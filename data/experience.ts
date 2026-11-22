export interface Experience {
    role: string
    company: string
    status: string
    start: Date
    /** Leave out for the current role. */
    end?: Date
}

// Newest first. Months are 0-based: new Date(2021, 8, 1) is 1 Sep 2021.
export const EXPERIENCE: Experience[] = [
    { role: 'IT Officer', company: 'United Ceres College', status: 'Full-Time', start: new Date(2025, 8, 1) },
    { role: 'Software Developer', company: 'United Ceres College', status: 'Part-Time', start: new Date(2024, 1, 1), end: new Date(2025, 7, 31) },
    { role: 'Software Developer', company: 'Newmatik GmbH', status:'Full-Time', start: new Date(2022, 7, 1), end:new Date(2026, 7, 31) },
    { role: 'Software Developer', company: 'Elexess GmbH', status:'Full-Time', start: new Date(2021, 8, 1), end:new Date(2022, 7, 22) },
    { role: 'Systems Developer', company: 'Gaisano Unipace Corporation', status: 'Full-Time', start: new Date(2019, 6, 1), end: new Date(2021, 4, 31) },
    { role: 'Junior Systems Developer', company: 'Gaisano Unipace Corporation', status: 'Full-Time', start: new Date(2019, 0, 16), end: new Date(2019, 5, 30) },
    { role: 'Implementation Specialist', company: 'Gaisano Unipace Corporation', status: 'Full-Time', start: new Date(2018, 8, 1), end: new Date(2019, 0, 15) },
]

/** Start of your career, used for "N years experience" in the hero. */
export const CAREER_START = new Date(2018, 9, 1)
