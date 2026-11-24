export interface Project {
    title: string
    description: string
    repository: string
    image: string
}

export const PROJECTS: Project[] = [
    {
        title: 'Gaisano Grocery System',
        image: '/gaisanosystem.png',
        description: 'While working for Unipace Corp. Contributed in the development of Gaisano Grocery System using Frappe ERPNext Framework. The system handles sale tracking, inventory and reports of the company',
        repository: 'https://gitlab.com/bailabs/gaisano-erpnext',
    },
]
