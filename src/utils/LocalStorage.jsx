

const employees = [
  {
    id: 1,
    firstname: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
    active: 1,
    newTask: 1,
    completed: 1,
    failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design for the company website.",
        taskDate: "2026-09-18",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Logo",
        taskDescription: "Replace the old company logo with the new approved logo.",
        taskDate: "2026-09-15",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Login Bug",
        taskDescription: "Investigate and fix the login issue reported by users.",
        taskDate: "2026-09-12",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstname: "Rahul",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Collect sales data and prepare the monthly performance report.",
        taskDate: "2026-09-20",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize Files",
        taskDescription: "Arrange project documents and files in the shared folder.",
        taskDate: "2026-09-14",
        category: "Management"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Contact the client and follow up on the pending requirements.",
        taskDate: "2026-09-19",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Submit Budget Plan",
        taskDescription: "Submit the proposed budget plan for the upcoming project.",
        taskDate: "2026-09-10",
        category: "Finance"
      }
    ]
  },

  {
    id: 3,
    firstname: "Vikram",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop API",
        taskDescription: "Build REST API endpoints for the employee management system.",
        taskDate: "2026-09-22",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Backup",
        taskDescription: "Create a backup of the project database and verify its integrity.",
        taskDate: "2026-09-13",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Application",
        taskDescription: "Perform functional testing on the latest application build.",
        taskDate: "2026-09-21",
        category: "Testing"
      }
    ]
  },

  {
    id: 4,
    firstname: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Social Media Post",
        taskDescription: "Design and schedule promotional content for social media.",
        taskDate: "2026-09-18",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Product Details",
        taskDescription: "Review and update product information on the company website.",
        taskDate: "2026-09-16",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Send Newsletter",
        taskDescription: "Prepare and send the weekly newsletter to subscribers.",
        taskDate: "2026-09-11",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Analyze Campaign",
        taskDescription: "Review the performance of the latest marketing campaign.",
        taskDate: "2026-09-23",
        category: "Analytics"
      }
    ]
  },

  {
    id: 5,
    firstname: "Amit",
    email: "employee5@example.com",
    password: "123",
    taskCounts:{
    active: 2,
    newTask: 1,
    completed: 1,
    failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct Team Meeting",
        taskDescription: "Organize a meeting to discuss project progress and blockers.",
        taskDate: "2026-09-19",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Code",
        taskDescription: "Review the submitted code and provide feedback to the developer.",
        taskDate: "2026-09-15",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Plan Sprint",
        taskDescription: "Prepare the task plan for the next development sprint.",
        taskDate: "2026-09-24",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Complete Documentation",
        taskDescription: "Finish the technical documentation for the completed module.",
        taskDate: "2026-09-09",
        category: "Documentation"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

